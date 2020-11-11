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

export interface GetDistributionResponse<ResBody = DistributionVariety> extends Response {
  send: Send<ResBody, this>;
}

export interface GetDistributionsResponse<ResBody = Array<DistributionVariety>> extends Response {
  send: Send<ResBody, this>;
}

export interface CreateDistributionRequest<ReqBody = DistributionVariety> extends Request {
  body: ReqBody;
}

export type CreateDistributionResponse = Response;

export interface GetDistributionItemsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetDistributionItemsResponse<ResBody = Array<Array<DistributionItem>>> extends Response {
  send: Send<ResBody, this>;
}

export interface GetDistributionInstructionsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetDistributionInstructionsResponse<ResBody = Array<DistributionInstruction>> extends Response {
  send: Send<ResBody, this>;
}

export interface GetDistributionScientificDetailsRequest extends Request {
  params: {
    slug: string,
  };
}

export interface GetDistributionScientificDetailsResponse<ResBody = DistributionScientificDetails> extends Response {
  send: Send<ResBody, this>;
}

export interface GetDistributionsByKeywordRequest extends Request {
  params: {
    keyword: string,
  };
}

export interface GetDistributionsByKeywordResponse<ResBody = Array<DistributionVariety>> extends Response {
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
