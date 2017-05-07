import {grpc, BrowserHeaders} from "grpc-web-client";
import {Prices} from "./prices_pb_service";
import {PricesRequest, PricesResponse} from "./prices_pb";

declare const USE_TLS: boolean;
const host = USE_TLS ? "https://localhost:9091" : "http://localhost:9090";

function getPrices() {
  const pricesRequest = new PricesRequest();
  pricesRequest.setShortcode("SHP");
  pricesRequest.setExchange("JSE");
  grpc.invoke(Prices.GetPrices, {
    request: pricesRequest,
    host: host,
    onHeaders: (headers: BrowserHeaders) => {
      console.log("getPrices.onHeaders", headers);
    },
    onMessage: (message: PricesResponse) => {
      console.log("getPrices.onMessage", message.toObject());
    },
    onEnd: (code: grpc.Code, msg: string, trailers: BrowserHeaders) => {
      console.log("getPrices.onEnd", code, msg, trailers);
    }
  });
}

getPrices();