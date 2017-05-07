package main

import (
	"log"

	context "golang.org/x/net/context"
)

type prices struct{}

func (p *prices) GetPrices(c context.Context, req *PricesRequest) (*PricesResponse, error) {
	pricesResponse, err := fetchGooglePrices(req.Exchange, req.Shortcode)
	if err != nil {
		log.Fatal(err)
		return nil, err
	}

	return pricesResponse, nil
}
