"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = module.exports = express_1.default();
const repo = require('./_database/_repo');
const SERVICE = '/plant';
const IdGenerator = __importStar(require("./util/IdGenerator"));
/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /plant/:id           Get the summary of a plant variety given an id.
// POST /plant/              Create a new plant variety.
/* ------------------------------------------------------------------------- */
app.get(`${SERVICE}/:id`, (req, res) => {
    repo.get(req.params.id)
        .then((plantVariety) => {
        res.send(plantVariety).status(200).end();
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(404);
    });
});
app.post(`${SERVICE}`, (req, res) => {
    repo.insert(//
    IdGenerator.generate(req.body), //
    req.body.getGenus(), //
    req.body.getSpecies(), //
    req.body.getDescription() //
    )
        .then(() => res.sendStatus(200))
        .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
//# sourceMappingURL=_api.js.map