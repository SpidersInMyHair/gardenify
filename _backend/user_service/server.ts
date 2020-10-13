import express from 'express';

const app = module.exports = express();
const sha256 = require('js-sha256').sha256;
const repo = require('./_database/_repo');
const SERVICE = '/user';

import * as IdGenerator from './util/IdGenerator';

import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserRequest,
  GetUserResponse
} from "./_messages";
import {User} from "../../protos/_backend/user_service/protos/user_pb";


/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /user/:id           Get an user with the given id.
// POST /user/              Create a new user.
/* ------------------------------------------------------------------------- */

// GET  /user/:id
app.get(`${SERVICE}/:id`, (req: GetUserRequest, res: GetUserResponse) => {
  repo.get(req.params.id)
  .then((user: User) => res.send(user).status(200).end())
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// POST /user/
app.post(`${SERVICE}`, (req: CreateUserRequest, res: CreateUserResponse) => {
  const id: string = IdGenerator.generate(req.body.email);
  const email: string = req.body.email;
  const password: string = sha256(req.body.password);

  repo.create(id, email, password)
  .then(() => res.sendStatus(200))
  .catch((err: any) => {
    console.log(err);
    res.sendStatus(500);
  });
});