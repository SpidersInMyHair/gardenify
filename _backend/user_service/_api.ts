import express from 'express';
const app = module.exports = express();

const SERVICE = '/user';

import {User} from '../../protos/_backend/user_service/protos/user_pb';
import {GardenifyRequest} from "../_common/GardenifyRequest";

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