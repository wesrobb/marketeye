package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
	"strings"
)

func fetchGooglePrices(exchange string, shortCode string) (*PricesResponse, error) {
	priceURL := fmt.Sprintf("https://www.google.com/finance/getprices?q=%s&x=%s&i=604800&p=2Y&f=d,c,v,o,h,l", shortCode, exchange)

	priceResp, err := http.Get(priceURL)
	if err != nil {
		return nil, err
	}
	defer priceResp.Body.Close()

	responseData, err := ioutil.ReadAll(priceResp.Body)
	if err != nil {
		return nil, err
	}

	responseString := string(responseData)
	//fmt.Println(responseString)

	lines := strings.Split(responseString, "\n")
	// For some reason the first line of the google data is not encoded correctly
	lines[0], err = url.QueryUnescape(lines[0])
	if err != nil {
		return nil, err
	}

	return parseGooglePricesResponse(lines)
}

func parseGooglePricesResponse(responseLines []string) (*PricesResponse, error) {
	p := &PricesResponse{}

	// Consider parallelizing parsing of headers and price entries
	// Interval might make this painful as it is required from the headers before we can
	// start processing the price entries
	for i, line := range responseLines[0:7] {
		if len(line) == 0 {
			continue
		}
		if !strings.ContainsAny(line, "=") {
			return nil, fmt.Errorf("Google price response contains badly formatted header: %s on line %d", line, i)
		}

		err := parseGooglePriceHeader(line, p)
		if err != nil {
			return nil, err
		}
	}

	priceEntriesCsv := responseLines[7:]
	err := parseGooglePriceEntries(priceEntriesCsv, p)
	if err != nil {
		return nil, err
	}

	return p, nil
}

func parseGooglePriceHeader(header string, p *PricesResponse) error {
	const exchangeHeader = "EXCHANGE"
	const marketOpenMinuteHeader = "MARKET_OPEN_MINUTE"
	const marketCloseMinuteHeader = "MARKET_CLOSE_MINUTE"
	const intervalHeader = "INTERVAL"
	const timezoneOffsetHeader = "TIMEZONE_OFFSET"

	// Google price headers contain key value pairs seperated by '='. eg. Exchange=JSE
	kv := strings.Split(header, "=")

	kvLen := len(kv)
	if kvLen != 2 {
		return fmt.Errorf("Malformed google price header\n %s", header)
	}

	switch kv[0] {
	case exchangeHeader:
		p.Exchange = kv[1]
	case marketOpenMinuteHeader:
		marketOpenMinute, err := strconv.Atoi(kv[1])
		if err != nil {
			return err
		}
		p.MarketOpenMin = int32(marketOpenMinute)
	case marketCloseMinuteHeader:
		marketCloseMinute, err := strconv.Atoi(kv[1])
		if err != nil {
			return err
		}
		p.MarketCloseMin = int32(marketCloseMinute)
	case intervalHeader:
		interval, err := strconv.Atoi(kv[1])
		if err != nil {
			return err
		}
		p.PriceIntevalSec = int32(interval)
	case timezoneOffsetHeader:
		timezoneOffset, err := strconv.Atoi(kv[1])
		if err != nil {
			return err
		}
		p.TimezoneOffsetMin = int32(timezoneOffset)
	}

	return nil
}

func parseGooglePriceEntries(priceEntriesCsv []string, p *PricesResponse) error {
	// Timestamp from google either starts with an 'a' to show that
	// it is a unix timestamp, otherwise it represent an offset from
	// the interval specified in the message headers.
	// In order to convert all these offsets to unix timestamps
	// we have to track the last full unix timestamp seen in the data.
	lastUnixTimestamp := int64(0)
	priceEntriesLen := len(priceEntriesCsv)
	p.PriceEntries = make([]*PriceEntry, 0, priceEntriesLen)

	for _, priceEntryCsv := range priceEntriesCsv {
		// Empty line marks the end of the data.
		if len(priceEntryCsv) == 0 {
			return nil
		}

		priceData := strings.Split(priceEntryCsv, ",")
		if len(priceData) != 6 {
			// Price data should be ordered as DATE,CLOSE,HIGH,LOW,OPEN,VOLUME
			return fmt.Errorf("Google price data has too many columns %s: ", priceEntryCsv)
		}

		priceEntry := &PriceEntry{}
		p.PriceEntries = append(p.PriceEntries, priceEntry)
		if strings.HasPrefix(priceData[0], "a") {
			timestampString := priceData[0][1:]
			unixTimestamp, err := strconv.ParseInt(timestampString, 10, 64)
			if err != nil {
				return err
			}
			priceEntry.UnixTimestamp = unixTimestamp
			lastUnixTimestamp = unixTimestamp
		} else {
			offset, err := strconv.ParseInt(priceData[0], 10, 64)
			if err != nil {
				return err
			}

			if lastUnixTimestamp == 0 {
				return fmt.Errorf("Offset encountered before unix timestamp when parsing google price data")
			}
			priceEntry.UnixTimestamp = offset*int64(p.PriceIntevalSec) + lastUnixTimestamp
		}

		// Parse price data into the values array which is 4 times longer than the other arrays
		close, err := strconv.ParseInt(priceData[1], 10, 64)
		if err != nil {
			return err
		}
		priceEntry.Close = close

		high, err := strconv.ParseInt(priceData[2], 10, 64)
		if err != nil {
			return err
		}
		priceEntry.High = high

		low, err := strconv.ParseInt(priceData[3], 10, 64)
		if err != nil {
			return err
		}
		priceEntry.Low = low

		open, err := strconv.ParseInt(priceData[4], 10, 64)
		if err != nil {
			return err
		}
		priceEntry.Open = open

		volume, err := strconv.ParseInt(priceData[5], 10, 64)
		if err != nil {
			return err
		}
		priceEntry.Volume = volume
	}

	return nil
}
