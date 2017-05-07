package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"

	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

var (
	enableTLS       = flag.Bool("enable_tls", false, "Use TLS - required for HTTP2.")
	tlsCertFilePath = flag.String("tls_cert_file", "../misc/localhost.crt", "Path to the CRT/PEM file.")
	tlsKeyFilePath  = flag.String("tls_key_file", "../misc/localhost.key", "Path to the private key file.")
)

/*func getPrices(c echo.Context) error {
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
}*/

func main() {
	flag.Parse()

	port := 9090
	if *enableTLS {
		port = 9091
	}

	grpcServer := grpc.NewServer()
	RegisterPricesServer(grpcServer, &prices{})
	grpclog.SetLogger(log.New(os.Stdout, "api: ", log.LstdFlags))

	wrappedServer := grpcweb.WrapServer(grpcServer)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		if origin := req.Header.Get("Origin"); origin != "" {
			resp.Header().Set("Access-Control-Allow-Origin", origin)
			resp.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			resp.Header().Set("Access-Control-Allow-Headers",
				"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, X-GRPC-Web")
		}
		// Stop here if its Preflighted OPTIONS request
		if req.Method == "OPTIONS" {
			return
		}

		wrappedServer.ServeHttp(resp, req)
	}

	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: http.HandlerFunc(handler),
	}

	grpclog.Printf("Starting server. http port: %d, with TLS: %v", port, *enableTLS)

	if *enableTLS {
		if err := httpServer.ListenAndServeTLS(*tlsCertFilePath, *tlsKeyFilePath); err != nil {
			grpclog.Fatalf("failed starting http2 server: %v", err)
		}
	} else {
		if err := httpServer.ListenAndServe(); err != nil {
			grpclog.Fatalf("failed starting http server: %v", err)
		}
	}

	/*	e := echo.New()
		//e.Use(middleware.Gzip())
		e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
			AllowOrigins: []string{"*"},
			AllowHeaders: []string{"*"},
		}))
		e.GET("/prices/:shortCode", getPrices)
		e.Logger.Fatal(e.Start(":9090"))*/
}
