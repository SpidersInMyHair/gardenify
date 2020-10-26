import express from 'express';

const app = module.exports = express();
const repo = require('./_database/_repo');
const SERVICE = '/api/plant';

import * as IdGenerator from './util/IdGenerator';
import {
  PlantInstruction,
  PlantItem,
  PlantScientificDetails,
  PlantVariety
} from '../../protos/_backend/plant_service/protos/plant_pb';
import {
  CreatePlantRequest,
  CreatePlantResponse,
  GetPlantInstructionsRequest,
  GetPlantInstructionsResponse,
  GetPlantItemsRequest,
  GetPlantItemsResponse,
  GetPlantRequest,
  GetPlantResponse,
  GetPlantsResponse,
  GetPlantScientificDetailsRequest,
  GetPlantScientificDetailsResponse,
  GetPlantsByKeywordRequest,
  GetPlantsByKeywordResponse
} from "./_messages";

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:slug                Get the summary of a plant variety given an slug.
// POST /plant/                   Create a new plant variety.
// GET  /plant/items/:id          Get the items listed for a given plant variety.
// GET  /plant/instructions/:id   Get the ordered instructions listed for a given plant variety.
// GET  /plant/scientific/:id     Get the scientific details of the plant variety with the given id.
// GET /plant/search/:keyword     Get the summary of all plants matching the keyword
/* ------------------------------------------------------------------------- */

// GET  /plant/:id
app.get(`${SERVICE}/:slug`, (req: GetPlantRequest, res: GetPlantResponse) => {
  repo.getPlant(req.params.slug)
  .then((plantVariety: PlantVariety) => {
    res.send(plantVariety).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// GET  /plant
app.get(`${SERVICE}`, (req: any, res: GetPlantsResponse) => {
  repo.getPlants()
  .then((plantVarieties: Array<PlantVariety>) => {
    res.send(plantVarieties).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// POST /plant
app.post(`${SERVICE}`, (req: CreatePlantRequest, res: CreatePlantResponse) => {
  repo.insert( //
  IdGenerator.generate(req.body), //
  req.body.getGenus(), //
  req.body.getSpecies(), //
  req.body.getDescription() //
  )
  .then(() => res.sendStatus(200))
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// GET  /plant/items/:id
app.get(`${SERVICE}/items/:id`, (req: GetPlantItemsRequest, res: GetPlantItemsResponse) => {
  repo.getItems(req.params.id)
  .then((plantItems: Array<PlantItem>) => {
    res.send(plantItems).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// GET  /plant/instructions/:id
app.get(`${SERVICE}/instructions/:id`, (req: GetPlantInstructionsRequest, res: GetPlantInstructionsResponse) => {
  repo.getInstructions(req.params.id)
  .then((plantInstructions: Array<PlantInstruction>) => {
    res.send(plantInstructions).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

//GET /plant/scientific/:id
app.get(`${SERVICE}/scientific/:id`, (req: GetPlantScientificDetailsRequest, res: GetPlantScientificDetailsResponse) => {
  repo.getScientificDetails(req.params.id)
  .then((plantScientificDetails: PlantScientificDetails) => {
    res.send(plantScientificDetails).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// GET  /plant/search/:keyword
app.get(`${SERVICE}/search/:keyword`, (req: GetPlantsByKeywordRequest, res: GetPlantsByKeywordResponse) => {
  repo.getPlantsByKeyword(req.params.keyword)
  .then((plantVarieties: Array<PlantVariety>) => {
    res.send(plantVarieties).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});
