// package: 
// file: _backend/plant_service/protos/plant.proto

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
    slug: string,
    name: string,
    common_name: string,
    genus: string,
    family: string,
    img_url: string
  }
}

export class PlantItem extends jspb.Message {
  getPlantVarietyId(): string;
  setPlantVarietyId(value: string): void;

  getItemName(): string;
  setItemName(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getUnit(): UnitMap[keyof UnitMap];
  setUnit(value: UnitMap[keyof UnitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantItem.AsObject;
  static toObject(includeInstance: boolean, msg: PlantItem): PlantItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantItem;
  static deserializeBinaryFromReader(message: PlantItem, reader: jspb.BinaryReader): PlantItem;
}

export namespace PlantItem {
  export type AsObject = {
    plantVarietyId: string,
    itemName: string,
    quantity: number,
    unit: UnitMap[keyof UnitMap],
  }
}

export class PlantInstruction extends jspb.Message {
  getPlantVarietyId(): string;
  setPlantVarietyId(value: string): void;

  getStepNumber(): number;
  setStepNumber(value: number): void;

  getInstruction(): string;
  setInstruction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantInstruction.AsObject;
  static toObject(includeInstance: boolean, msg: PlantInstruction): PlantInstruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantInstruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantInstruction;
  static deserializeBinaryFromReader(message: PlantInstruction, reader: jspb.BinaryReader): PlantInstruction;
}

export namespace PlantInstruction {
  export type AsObject = {
    plantVarietyId: string,
    stepNumber: number,
    instruction: string,
  }
}

export class PlantScientificDetails extends jspb.Message {
  getPlantVarietyId(): string;
  setPlantVarietyId(value: string): void;

  getPhLow(): number;
  setPhLow(value: number): void;

  getPhHigh(): number;
  setPhHigh(value: number): void;

  getTemperatureLow(): number;
  setTemperatureLow(value: number): void;

  getTemperatureHigh(): number;
  setTemperatureHigh(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlantScientificDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PlantScientificDetails): PlantScientificDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlantScientificDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlantScientificDetails;
  static deserializeBinaryFromReader(message: PlantScientificDetails, reader: jspb.BinaryReader): PlantScientificDetails;
}

export namespace PlantScientificDetails {
  export type AsObject = {
    plantVarietyId: string,
    phLow: number,
    phHigh: number,
    temperatureLow: number,
    temperatureHigh: number,
  }
}

export interface UnitMap {
  GRAM: 0;
  LITER: 1;
}

export const Unit: UnitMap;

