// package: main
// file: prices.proto

import * as jspb from "google-protobuf";

export class PricesRequest extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  getShortCode(): string;
  setShortCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PricesRequest): PricesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PricesRequest;
  static deserializeBinaryFromReader(message: PricesRequest, reader: jspb.BinaryReader): PricesRequest;
}

export namespace PricesRequest {
  export type AsObject = {
    exchange: string,
    shortCode: string,
  }
}

export class PriceEntry extends jspb.Message {
  getUnixTimestamp(): number;
  setUnixTimestamp(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getOpen(): number;
  setOpen(value: number): void;

  getClose(): number;
  setClose(value: number): void;

  getLow(): number;
  setLow(value: number): void;

  getHigh(): number;
  setHigh(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceEntry.AsObject;
  static toObject(includeInstance: boolean, msg: PriceEntry): PriceEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceEntry;
  static deserializeBinaryFromReader(message: PriceEntry, reader: jspb.BinaryReader): PriceEntry;
}

export namespace PriceEntry {
  export type AsObject = {
    unixTimestamp: number,
    volume: number,
    open: number,
    close: number,
    low: number,
    high: number,
  }
}

export class PricesResponse extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  getMarketOpenMin(): number;
  setMarketOpenMin(value: number): void;

  getMarketCloseMin(): number;
  setMarketCloseMin(value: number): void;

  getTimezoneOffsetMin(): number;
  setTimezoneOffsetMin(value: number): void;

  getPriceIntevalSec(): number;
  setPriceIntevalSec(value: number): void;

  clearPriceEntriesList(): void;
  getPriceEntriesList(): Array<PriceEntry>;
  setPriceEntriesList(value: Array<PriceEntry>): void;
  addPriceEntries(value?: PriceEntry, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PricesResponse): PricesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PricesResponse;
  static deserializeBinaryFromReader(message: PricesResponse, reader: jspb.BinaryReader): PricesResponse;
}

export namespace PricesResponse {
  export type AsObject = {
    exchange: string,
    marketOpenMin: number,
    marketCloseMin: number,
    timezoneOffsetMin: number,
    priceIntevalSec: number,
    priceEntriesList: Array<PriceEntry.AsObject>,
  }
}

