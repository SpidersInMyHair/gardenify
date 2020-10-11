import {
  CreatePlantApiRequest,
  CreatePlantApiResponse,
  GetPlantApiRequest,
  GetPlantApiResponse
} from "../protos/_api/protos/plant_pb";


export function getPlantVariety(req: GetPlantApiRequest.AsObject): Promise<GetPlantApiResponse.AsObject> {
  return new Promise((resolve, reject) => {
    fetch(`/plant/${req.id}`)
    .then((res: Response) => res.json())
    .then(res => resolve(res))
    .catch((rej: any) => reject(rej));
  });
}

export function createPlantVariety(req: CreatePlantApiRequest.AsObject): Promise<CreatePlantApiResponse.AsObject> {
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

