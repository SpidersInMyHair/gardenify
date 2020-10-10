import express from 'express';
const app = module.exports = express();
const repo = require('./_database/_repo');

const SERVICE = '/plant';

import {PlantVariety} from '../../protos/_backend/plant_service/protos/plant_variety_pb';
import {GetPlantRequest, GetPlantResponse} from "./_messages";

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:id           Get the summary of a plant variety given an id.
// POST /plant/              Create a new plant variety.
/* ------------------------------------------------------------------------- */

app.get(`${SERVICE}/:id`, (req: GetPlantRequest, res: GetPlantResponse) => {
  const plant_id: string = req.params.id;
  const promise: Promise<PlantVariety> = repo.get(plant_id);

  promise
  .then((plantVariety: PlantVariety) => {
    res.sendStatus(200).send(plantVariety);
  })
  .catch((err: any) => {
    console.log(err);
    res.status(404);
  })
});

app.post(`${SERVICE}`, (req, res) => {
  // repo.insert();
  let user = req.body;
  console.log("Request body:", user);

  res.status(200);
});