import {Request, Response} from "express";
import {PlantVariety} from "../../protos/_backend/plant_service/protos/plant_variety_pb";
import {Send} from "express-serve-static-core";

export type GetPlantRequest = Request & {
  body: {
    plantVariety: PlantVariety;
  }
}

export interface GetPlantResponse<ResBody = PlantVariety> extends Response {
  send: Send<ResBody, this>;
}