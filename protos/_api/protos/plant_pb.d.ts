// package: 
// file: _api/protos/plant.proto

import * as jspb from "google-protobuf";

export class GetPlantApiRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlantApiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlantApiRequest): GetPlantApiRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlantApiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlantApiRequest;
  static deserializeBinaryFromReader(message: GetPlantApiRequest, reader: jspb.BinaryReader): GetPlantApiRequest;
}

export namespace GetPlantApiRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetPlantApiResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getGenus(): string;
  setGenus(value: string): void;

  getSpecies(): string;
  setSpecies(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlantApiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlantApiResponse): GetPlantApiResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlantApiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlantApiResponse;
  static deserializeBinaryFromReader(message: GetPlantApiResponse, reader: jspb.BinaryReader): GetPlantApiResponse;
}

export namespace GetPlantApiResponse {
  export type AsObject = {
    id: string,
    genus: string,
    species: string,
    description: string,
  }
}

export class CreatePlantApiRequest extends jspb.Message {
  getGenus(): string;
  setGenus(value: string): void;

  getSpecies(): string;
  setSpecies(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlantApiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlantApiRequest): CreatePlantApiRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePlantApiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlantApiRequest;
  static deserializeBinaryFromReader(message: CreatePlantApiRequest, reader: jspb.BinaryReader): CreatePlantApiRequest;
}

export namespace CreatePlantApiRequest {
  export type AsObject = {
    genus: string,
    species: string,
    description: string,
  }
}

export class CreatePlantApiResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlantApiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlantApiResponse): CreatePlantApiResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePlantApiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlantApiResponse;
  static deserializeBinaryFromReader(message: CreatePlantApiResponse, reader: jspb.BinaryReader): CreatePlantApiResponse;
}

export namespace CreatePlantApiResponse {
  export type AsObject = {
  }
}

