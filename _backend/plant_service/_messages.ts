import {Request, Response} from "express";
import {
  PlantInstruction,
  PlantItem,
  PlantVariety,
  PlantScientificDetails
} from "../../protos/_backend/plant_service/protos/plant_pb";
import {Send} from "express-serve-static-core";

export type GetPlantRequest = Request;
export interface GetPlantResponse<ResBody = PlantVariety> extends Response {
  send: Send<ResBody, this>;
}

export interface CreatePlantRequest<ReqBody = PlantVariety> extends Request {
  body: ReqBody;
}
export type CreatePlantResponse = Response;

export type GetPlantItemsRequest = Request;
export interface GetPlantItemsResponse<ResBody = Array<PlantItem>> extends Response {
  send: Send<ResBody, this>;
}

export type GetPlantInstructionsRequest = Request;
export interface GetPlantInstructionsResponse<ResBody = Array<PlantInstruction>> extends Response {
  send: Send<ResBody, this>;
}

export type GetPlantScientificDetailsRequest = Request;
export interface GetPlantScientificDetailsResponse<ResBody = PlantScientificDetails> extends Response {
  send: Send<ResBody, this>;
}