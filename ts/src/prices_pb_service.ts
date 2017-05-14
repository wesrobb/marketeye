// package: main
// file: prices.proto

import * as prices_pb from "./prices_pb";
export class Prices {
  static serviceName = "main.Prices";
}
export namespace Prices {
  export class GetPrices {
    static methodName = "GetPrices";
    static service = Prices;
    static requestStream = false;
    static responseStream = false;
    static requestType = prices_pb.PricesRequest;
    static responseType = prices_pb.PricesResponse;
  }
}
