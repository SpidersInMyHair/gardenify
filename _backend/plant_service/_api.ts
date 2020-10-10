import { PlantVariety } from '../../protos/_backend/plant_service/protos/plant_variety_pb';

import express from 'express';
import {NextApiRequest, NextApiResponse} from "next";
import {GardenifyRequest} from "../_common/GardenifyRequest";
import {GardenifyResponse} from "../_common/GardenifyResponse";

const app = express();
const SERVICE = '/plant';

class CreatePlantVarietyRequest extends GardenifyRequest {
    body: PlantVariety.AsObject;
}

type CreatePlantVarietyResponse = GardenifyResponse & {
    // Empty
}

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:id           Get the summary of a plant variety given an id.
// POST /plant/              Create a new plant variety.
/* ------------------------------------------------------------------------- */

app.get(`${SERVICE}/:id`, (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200);
});

app.post(`${SERVICE}`, (req: CreatePlantVarietyRequest, res: GardenifyResponse) => {
    console.log("Successfully hit the /plant endpoint");

    let user = req.body;
    console.log("Request body:", user);

    res.status(200);
});