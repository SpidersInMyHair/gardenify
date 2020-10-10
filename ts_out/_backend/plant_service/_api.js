"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = module.exports = express_1.default();
const SERVICE = '/plant';
const repo = require('./_database/_repo');
app.get(`${SERVICE}/:id`, (req, res) => {
    const plant_id = req.params.id;
    const promise = repo.get(plant_id);
    promise
        .then((value) => {
        res.plantVariety = value;
        res.sendStatus(200);
    })
        .catch((err) => {
        console.log(err);
        res.status(404).send("Error");
    });
});
app.post(`${SERVICE}`, (req, res) => {
    // repo.insert();
    let user = req.body;
    console.log("Request body:", user);
    res.status(200);
});
//# sourceMappingURL=_api.js.map