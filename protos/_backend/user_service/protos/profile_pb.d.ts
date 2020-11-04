// package: 
// file: _backend/user_service/protos/profile.proto

import * as jspb from "google-protobuf";

export class Profile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAboutMe(): string;
  setAboutMe(value: string): void;

  getBriefDesc(): string;
  setBriefDesc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    name: string,
    aboutMe: string,
    briefDesc: string,
  }
}

