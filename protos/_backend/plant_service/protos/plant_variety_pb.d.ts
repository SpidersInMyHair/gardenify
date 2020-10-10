// package: 
// file: _backend/plant_service/protos/plant_variety.proto

import * as jspb from "google-protobuf";

export class PlantVariety extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getGenus(): string;
  setGenus(value: string): void;

  getSpecies(): string;
  setSpecies(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantVariety.AsObject;
  static toObject(includeInstance: boolean, msg: PlantVariety): PlantVariety.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantVariety, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantVariety;
  static deserializeBinaryFromReader(message: PlantVariety, reader: jspb.BinaryReader): PlantVariety;
}

export namespace PlantVariety {
  export type AsObject = {
    id: string,
    genus: string,
    species: string,
    description: string,
  }
}

