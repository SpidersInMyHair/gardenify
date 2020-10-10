import express from 'express';

const app = module.exports = express();
const repo = require('./_database/_repo');
const SERVICE = '/plant';

import * as IdGenerator from './util/IdGenerator';
import {PlantVariety} from '../../protos/_backend/plant_service/protos/plant_variety_pb';
import {
  CreatePlantRequest,
  CreatePlantResponse,
  GetPlantRequest,
  GetPlantResponse
} from "./_messages";

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:id           Get the summary of a plant variety given an id.
// POST /plant/              Create a new plant variety.
/* ------------------------------------------------------------------------- */

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