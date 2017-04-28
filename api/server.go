package main

import (
	"fmt"
	"net/http"

	"github.com/golang/protobuf/jsonpb"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func getPrices(c echo.Context) error {
	prices, err := fetchGooglePrices(c.Param("shortCode"))
	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Failed to create price source")
	}

	jsonMarshaler := &jsonpb.Marshaler{
		EnumsAsInts:  false,
		EmitDefaults: false,
		Indent:       "  ",
		OrigName:     false,
	}

	for i, priceEntry := range prices.PriceEntries {
		fmt.Println("index", i)
		fmt.Println("timestamp", priceEntry.UnixTimestamp)
		fmt.Println("open", priceEntry.Open)
		fmt.Println("close", priceEntry.Close)
		fmt.Println("high", priceEntry.High)
		fmt.Println("low", priceEntry.Low)
		fmt.Println("volume", priceEntry.Volume)
	}

	response, err := jsonMarshaler.MarshalToString(prices)
	//protoResponse, err := proto.Marshal(prices)
	// response := string(protoResponse)
	if err != nil {
		response = err.Error()
	}
	return c.String(http.StatusOK, response)
}

func main() {
	e := echo.New()
	//e.Use(middleware.Gzip())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{"*"},
	}))
	e.GET("/prices/:shortCode", getPrices)
	e.Logger.Fatal(e.Start(":9090"))
}
