import express from 'express';

const app = module.exports = express();
const sha256 = require('js-sha256').sha256;
const repo = require('./_database/_repo');
const SERVICE = '/api/user';

import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserByIdRequest,
  GetUserByIdResponse,
  GetUserProfileRequest,
  GetUserProfileResponse,
  GetUserRequest,
  GetUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  LogoutUserRequest,
  LogoutUserResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse
} from "./_messages";
import { Profile, User } from "../../protos/_backend/user_service/protos/user_pb";

async function checkSession(id: string, session_key: string) {
  if (!id || !session_key) {
    return false
  }

  try {
    const session = await repo.getSession(id, session_key)
    return session ? true : false
  } catch (err: any) {
    console.log(err);
    return false
  }
}

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /user               Get if user session is valid by examining cookies.
// POST /user               Create a new user.
// GET  /user/:id           Get the user with the given id.
// POST /user/login         Login an user.
// POST /user/logout        Logout an user.
// GET  /user/profile/:id   Get the profile for the given user id.
// POST /user/profile/:id   Edit the profile for the given user id.
/* ------------------------------------------------------------------------- */

// GET  /user               Get if user is logged in or not given cookies.
app.get(`${SERVICE}`, (req: GetUserRequest, res: GetUserResponse) => {
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.getProfile(id)
      .then((profile: Profile) => res.send(profile).status(200).end())
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });  
    })
});

// POST /user               Create a new user.
app.post(`${SERVICE}`, (req: CreateUserRequest, res: CreateUserResponse) => {
  const email: string = req.body.email;
  const password: string = sha256(req.body.password);

  repo.createUser(email, password)
    .then((user: any) => res.cookie('UID', user.id).cookie('SID', user.session_key).sendStatus(200))
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// GET  /user/:id           Get the user with the given id.
app.get(`${SERVICE}/:id`, (req: GetUserByIdRequest, res: GetUserByIdResponse) => {
  repo.getUserById(req.params.id)
    .then((user: User) => res.send(user).status(200).end())
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// POST /user/login         Login an user.
app.post(`${SERVICE}/login`, (req: LoginUserRequest, res: LoginUserResponse) => {
  const email: string = req.body.email;
  const password: string = sha256(req.body.password);

  repo.getUser(email, password)
    .then((user: any) => {
      if (!user) {
        res.sendStatus(401);
        return
      }
      repo.setSession(user.id)
        .then((session: string) => res
          .cookie('UID', user.id)
          .cookie('SID', session)
          .send(user)
          .status(200).end())
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    })
});

// POST /user/logout      Logout an user.
app.post(`${SERVICE}/logout`, (req: LogoutUserRequest, res: LogoutUserResponse) => {
  const id = req.cookies.UID;
  const session_key = req.cookies.SID;

  repo.clearSession(id, session_key)
    .then(() => res.sendStatus(200))
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    })
});

// POST /user/edit Edit the user profile for the given user id
app.post(`${SERVICE}/edit`, (req: UpdateUserProfileRequest, res: UpdateUserProfileResponse) => {
  const id = req.cookies.UID;

  const user = {email: req.body.email, password: req.body.password};
  delete req.body.email;
  delete req.body.password;

  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.editProfile(id, user, req.body)
      .then((success) => success ? res.sendStatus(200) : res.sendStatus(500))
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });
  })
});

// GET  /user/profile/favourites               Get logged in users fav plants.
app.get(`${SERVICE}/profile/favourites`, (req: GetUserRequest, res: GetUserResponse) => {
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.getFavourites(id, req.query.limit, req.query.offset)
    .then((favourites) => res.send(favourites).status(200).end())
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
  })
});

// GET  /user/profile/favourites/:slug               Sets the plant to one of the users favourites.
app.get(`${SERVICE}/profile/favourites/:slug`, (req: GetUserRequest, res: GetUserResponse) => {
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.checkFavourite(id, req.params.slug)
      .then((success) => res.send({status: success}).status(200).end())
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });
  })
});

// GET  /user/profile/favourites/:slug               Sets the plant to one of the users favourites.
app.get(`${SERVICE}/profile/favourites/add/:slug`, (req: GetUserRequest, res: GetUserResponse) => {
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.addFavourite(id, req.params.slug)
      .then((success) => success ? res.sendStatus(200) : res.sendStatus(500))
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });
  })
});

// GET  /user/profile/favourites/:slug               Removes the plant from fav.
app.get(`${SERVICE}/profile/favourites/remove/:slug`, (req: GetUserRequest, res: GetUserResponse) => {
  const id = req.cookies.UID;
  checkSession(id, req.cookies.SID).then((session) => {
    if (!session) res.sendStatus(401)
    else repo.removeFavourite(id, req.params.slug)
      .then((success) => success ? res.sendStatus(200) : res.sendStatus(500))
      .catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
      });
  })
});

// GET  /user/profile/:id   Get the profile for the given user id.
app.get(`${SERVICE}/profile/:id`, (req: GetUserProfileRequest, res: GetUserProfileResponse) => {
  repo.getProfile(req.params.id)
    .then((profile: Profile) => res.send(profile).status(200).end())
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(500);
    });
});
