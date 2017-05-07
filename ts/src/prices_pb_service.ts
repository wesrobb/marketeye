// package: main
// file: prices.proto

import * as prices_pb from "./prices_pb";
export class Prices {
  static serviceName = "main.Prices";
}
export namespace Prices {
  export class GetPrices {
    static readonly methodName = "GetPrices";
    static readonly service = Prices;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = prices_pb.PricesRequest;
    static readonly responseType = prices_pb.PricesResponse;
  }
}
