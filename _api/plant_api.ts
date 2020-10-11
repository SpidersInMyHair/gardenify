export type GetPlantApiRequest = {
  id: string,
}
export type GetPlantApiResponse = {
  id: string,
  genus: string,
  species: string,
  description: string,
}

export function getPlantVariety(req: GetPlantApiRequest): Promise<GetPlantApiResponse> {
  return new Promise((resolve, reject) => {
    fetch(`/plant/${req.id}`)
    .then((res: Response) => res.json())
    .then(res => resolve(res))
    .catch((rej: any) => reject(rej));
  });
}

export type CreatePlantApiRequest = {
  genus: string,
  species: string,
  description: string,
}
export type CreatePlantApiResponse = {}

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

