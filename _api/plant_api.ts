import {
  CreatePlantRequest,
  CreatePlantResponse, GetPlantInstructionsRequest,
  GetPlantItemsRequest,
  GetPlantRequest, GetPlantScientificDetailsRequest
} from "../_backend/plant_service/_messages";
import {
  PlantInstruction,
  PlantItem,
  PlantScientificDetails,
  PlantVariety
} from "../protos/_backend/plant_service/protos/plant_pb";

export type GetPlantApiRequest = GetPlantRequest["params"];
export type GetPlantApiResponse = PlantVariety.AsObject;

export function getPlantVariety(req: GetPlantApiRequest): Promise<GetPlantApiResponse> {
  return new Promise((resolve, reject) => {
    fetch(`/plant/${req.id}`)
    .then((res: Response) => res.json())
    .then(res => resolve(res))
    .catch((rej: any) => reject(rej));
  });
}

export type CreatePlantApiRequest = CreatePlantRequest["params"];
export type CreatePlantApiResponse = CreatePlantResponse;

export function createPlantVariety(req: CreatePlantApiRequest): Promise<CreatePlantApiResponse> {
  return new Promise((resolve, reject) => {
    fetch('/plant/', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res: any) => resolve(res))
    .catch((rej: any) => reject(rej));
  });
}

export type GetPlantItemsApiRequest = GetPlantItemsRequest["params"];
export type GetPlantItemsApiResponse = Array<PlantItem.AsObject>;

export function getPlantItems(req: GetPlantItemsApiRequest): Promise<GetPlantItemsApiResponse> {
  return new Promise((resolve, reject) => {
    fetch(`/plant/items/${req.id}`)
    .then((res: Response) => res.json())
    .then(res => resolve(res))
    .catch((rej: any) => reject(rej));
  });
}

export type GetPlantInstructionsApiRequest = GetPlantInstructionsRequest["params"];
export type GetPlantInstructionsApiResponse = Array<PlantInstruction.AsObject>;

export function getPlantInstructions(req: GetPlantInstructionsApiRequest): Promise<GetPlantInstructionsApiResponse> {
  return new Promise((resolve, reject) => {
    fetch(`/plant/instructions/${req.id}`)
    .then((res: Response) => res.json())
    .then(res => resolve(res))
    .catch((rej: any) => reject(rej));
  });
}

export type GetPlantScientificDetailsApiRequest = GetPlantScientificDetailsRequest["params"];
export type GetPlantScientificDetailsApiResponse = PlantScientificDetails.AsObject;

export function getPlantScientificDetails(req: GetPlantScientificDetailsApiRequest): Promise<GetPlantScientificDetailsApiResponse> {
  return new Promise((resolve, reject) => {
    fetch(`/plant/scientific/${req.id}`)
    .then((res: Response) => res.json())
    .then(res => resolve(res))
    .catch((rej: any) => reject(rej));
  });
}
