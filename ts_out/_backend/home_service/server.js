"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = module.exports = express_1.default();
const SERVICE = '/home';
/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /home/test    An endpoint used for testing connection to the backend.
/* ------------------------------------------------------------------------- */
app.get(`${SERVICE}/test`, (req, res) => {
    res.status(200).send('Test was Okay');
});
//# sourceMappingURL=server.js.map