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

export class PriceEntries extends jspb.Message {
  clearUnixTimestampList(): void;
  getUnixTimestampList(): Array<number>;
  setUnixTimestampList(value: Array<number>): void;
  addUnixTimestamp(value: number, index?: number): void;

  clearVolumeList(): void;
  getVolumeList(): Array<number>;
  setVolumeList(value: Array<number>): void;
  addVolume(value: number, index?: number): void;

  clearValueList(): void;
  getValueList(): Array<number>;
  setValueList(value: Array<number>): void;
  addValue(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceEntries.AsObject;
  static toObject(includeInstance: boolean, msg: PriceEntries): PriceEntries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceEntries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceEntries;
  static deserializeBinaryFromReader(message: PriceEntries, reader: jspb.BinaryReader): PriceEntries;
}

export namespace PriceEntries {
  export type AsObject = {
    unixTimestampList: Array<number>,
    volumeList: Array<number>,
    valueList: Array<number>,
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

  hasPriceEntries(): boolean;
  clearPriceEntries(): void;
  getPriceEntries(): PriceEntries | undefined;
  setPriceEntries(value?: PriceEntries): void;

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
    priceEntries?: PriceEntries.AsObject,
  }
}

