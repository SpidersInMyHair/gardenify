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
  GetUserResponse,
  CreateProfileRequest,
  CreateProfileResponse,
  GetProfileRequest,
  GetProfileResponse
} from "./_messages";
import { User } from "../../protos/_backend/user_service/protos/user_pb";
import { Profile } from "../../protos/_backend/user_service/protos/profile_pb";


/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /user/:id           Get an user with the given id.
// POST /user/              Create a new user.
// GET  /profile/:id        Get a user profile.
// POST /profile/:id        Create or edit a user profile
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

// GET  /profile/:id
app.get(`${SERVICE}/:id`, (req: GetProfileRequest, res: GetProfileResponse) => {
  repo.get_profile(req.params.id)
    .then((user: Profile) => res.send(user).status(200).end())
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// POST /profile/:id
app.post(`${SERVICE}`, async (req: CreateProfileRequest, res: CreateProfileResponse) => {
  const id: string = req.params.id;
  const session: string = req.body.session;
  const valid_session = await repo.get_session(id);
  // return error if session/user_id isn't a valid pair
  if(typeof valid_session === 'undefined'){
    res.sendStatus(500);
    return;
  }

  let profile = repo.get_profile(req.params.id);
  let found: boolean = typeof profile !== 'undefined';
  // I'd like to avoid too much much nesting
  // ... initialize to profile 
  let name: string = found ? profile.name : '';
  let about_me: string = found ? profile.about_me : '';
  let brief_desc: string = found ? profile.breif_desc : '';

  // update if needed
  name = req.body.name !== '' ? req.body.name : name;
  about_me = req.body.about_me !== '' ? req.body.about_me : about_me;
  brief_desc = req.body.brief_desc !== '' ? req.body.brief_desc : brief_desc;

  if(found){ // update profile
    repo.update_profile(id, name, about_me, brief_desc)
    .then(() => res.sendStatus(200))
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
  }else{
    repo.create_profile(id, name, about_me, brief_desc)
    .then(() => res.sendStatus(200))
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
  }
  
});
