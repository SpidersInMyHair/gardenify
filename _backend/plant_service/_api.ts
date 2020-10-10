import express from 'express';
const app = module.exports = express();
const SERVICE = '/plant';

import { PlantVariety } from '../../protos/_backend/plant_service/protos/plant_variety_pb';

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:id           Get the summary of a plant variety given an id.
// POST /plant/              Create a new plant variety.
/* ------------------------------------------------------------------------- */

app.get(`${SERVICE}/:id`, (req, res) => {
    res.status(200);
});

app.post(`${SERVICE}`, (req, res) => {
    console.log("Successfully hit the /plant endpoint");

    let user = req.body;
    console.log("Request body:", user);

    res.status(200);
});