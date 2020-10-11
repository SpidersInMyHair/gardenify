import express from 'express';

const app = module.exports = express();
const repo = require('./_database/_repo');
const SERVICE = '/plant';

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
  GetPlantScientificDetailsRequest,
  GetPlantScientificDetailsResponse
} from "./_messages";

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:id                Get the summary of a plant variety given an id.
// POST /plant/                   Create a new plant variety.
// GET  /plant/items/:id          Get the items listed for a given plant variety.
// GET  /plant/instructions/:id   Get the ordered instructions listed for a given plant variety.
// GET  /plant/scientific/:id     Get the scientific details of the plant variety with the given id.
/* ------------------------------------------------------------------------- */

// GET  /plant/:id
app.get(`${SERVICE}/:id`, (req: GetPlantRequest, res: GetPlantResponse) => {
  repo.get(req.params.id)
  .then((plantVariety: PlantVariety) => {
    res.send(plantVariety).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(404);
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
    res.sendStatus(404);
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
    res.sendStatus(404);
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
    res.sendStatus(404);
  });
});

