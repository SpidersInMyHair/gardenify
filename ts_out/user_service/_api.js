"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = module.exports = express_1.default();
const SERVICE = '/user';
const GardenifyRequest_1 = require("../_common/GardenifyRequest");
class CreateUserRequest extends GardenifyRequest_1.GardenifyRequest {
}
/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /user/:id           Get an user with the given id.
// POST /user/              Create a new user.
/* ------------------------------------------------------------------------- */
app.get(`${SERVICE}/:id`, (req, res) => {
    res.status(200);
});
app.post(`${SERVICE}`, (req, res) => {
    console.log("Successfully hit the /user/ endpoint");
    let user = req.body;
    console.log("Request body:", user);
    res.status(200);
});
//# sourceMappingURL=_api.js.map