import {Request, Response} from "express";
import {Send} from "express-serve-static-core";
import {
  PlantInstruction,
  PlantItem,
  PlantVariety,
  PlantScientificDetails,
  Comments,
  Ratings,
  Distribution
} from "../../protos/_backend/plant_service/protos/plant_pb";

export interface GetPlantRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetPlantResponse<ResBody = PlantVariety> extends Response {
  send: Send<ResBody, this>;
}

export interface GetPlantsResponse<ResBody = Array<PlantVariety>> extends Response {
  send: Send<ResBody, this>;
}

export interface CreatePlantRequest<ReqBody = PlantVariety> extends Request {
  body: ReqBody;
}

export type CreatePlantResponse = Response;

export interface GetPlantItemsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetPlantItemsResponse<ResBody = Array<Array<PlantItem>>> extends Response {
  send: Send<ResBody, this>;
}

export interface GetPlantInstructionsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetPlantInstructionsResponse<ResBody = Array<PlantInstruction>> extends Response {
  send: Send<ResBody, this>;
}

export interface GetPlantScientificDetailsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetPlantScientificDetailsResponse<ResBody = PlantScientificDetails> extends Response {
  send: Send<ResBody, this>;
}

export interface GetPlantsByKeywordRequest extends Request {
  params: {
    keyword: string,
  };
}

export interface GetPlantsByKeywordResponse<ResBody = Array<PlantVariety>> extends Response {
  send: Send<ResBody, this>;
}

export interface GetCommentsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetCommentsResponse<ResBody = Array<Comments>> extends Response {
  send: Send<ResBody, this>;
}

export interface CreateCommentsRequest<ReqBody = Comments> extends Request {
  body: ReqBody;
}

export type CreateCommentsResponse = Response;

export interface GetRatingsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetRatingsResponse<ResBody = Array<Ratings>> extends Response {
  send: Send<ResBody, this>;
}

export interface CreateRatingsRequest<ReqBody = Ratings> extends Request {
  body: ReqBody;
}

export type CreateRatingsResponse = Response;

export interface GetDistributionRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetDistributionResponse<ResBody = Distribution> extends Response {
  send: Send<ResBody, this>;
}

export interface GetDistributionsResponse<ResBody = Array<Distribution>> extends Response {
  send: Send<ResBody, this>;
}
