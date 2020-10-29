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
// GET  /plant/items/:slug          Get the items listed for a given plant variety.
// GET  /plant/instructions/:slug   Get the ordered instructions listed for a given plant variety.
// GET  /plant/scientific/:slug     Get the scientific details of the plant variety with the given slug.
// GET /plant/search/:keyword     Get the summary of all plants matching the keyword
/* ------------------------------------------------------------------------- */

// GET  /plant/:slug
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
  let limit = 20;
  let offset = 0;
  if(req.query['limit'] !== ''){
    limit = req.query.limit;
  }  
  if(req.query['offset'] !== ''){
    offset = req.query.offset;
  }  
  //console.log(req.query)
  repo.getPlants(offset,limit)
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

// GET  /plant/items/:slug
app.get(`${SERVICE}/items/:slug`, (req: GetPlantItemsRequest, res: GetPlantItemsResponse) => {
  repo.getItems(req.params.slug)
  .then((plantItems: Array<PlantItem>) => {
    res.send(plantItems).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// GET  /plant/instructions/:slug
app.get(`${SERVICE}/instructions/:slug`, (req: GetPlantInstructionsRequest, res: GetPlantInstructionsResponse) => {
  repo.getInstructions(req.params.slug)
  .then((plantInstructions: Array<PlantInstruction>) => {
    res.send(plantInstructions).status(200).end();
  })
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

//GET /plant/scientific/:slug
app.get(`${SERVICE}/scientific/:slug`, (req: GetPlantScientificDetailsRequest, res: GetPlantScientificDetailsResponse) => {
  repo.getScientificDetails(req.params.slug)
  .then((plantScientificDetails: PlantScientificDetails) => {
    if(typeof plantScientificDetails !== 'undefined'){
       res.send(plantScientificDetails).status(200).end();
    }else{
       //repo.getScientificDetails(req.params.slug)
       repo.addScientificDetails(req.params.slug)
       .then((resp_final: PlantScientificDetails) => {
          res.send(resp_final).status(200).end();
       });
    }
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
