"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = module.exports = express_1.default();
const repo = require('./_database/_repo');
const SERVICE = '/plant';
/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:id           Get the summary of a plant variety given an id.
// POST /plant/              Create a new plant variety.
/* ------------------------------------------------------------------------- */
app.get(`${SERVICE}/:id`, (req, res) => {
    const plant_id = req.params.id;
    repo.get(plant_id)
        .then((plantVariety) => {
        res.send(plantVariety).status(200).end();
    })
        .catch((err) => {
        console.log(err);
        res.status(404).end();
    });
});
app.post(`${SERVICE}`, (req, res) => {
    // repo.insert();
    let user = req.body;
    console.log("Request body:", user);
    res.status(200);
});
//# sourceMappingURL=_api.js.map