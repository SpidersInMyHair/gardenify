import { User } from '../../protos/_backend/user_service/user_pb';

import express from 'express';
import {NextApiRequest, NextApiResponse} from "next";
import {GardenifyRequest} from "../_common/GardenifyRequest";

const app = express();
const SERVICE = '/user';

class CreateUserRequest extends GardenifyRequest {
    body: User.AsObject;
}

/* --------------------------- SERVICE ENDPOINTS --------------------------- */
// GET  /user/:id           Get an user with the given id.
// POST /user/              Create a new user.
/* ------------------------------------------------------------------------- */

app.get(`${SERVICE}/:id`, (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200);
});

app.post(`${SERVICE}`, (req: CreateUserRequest, res: NextApiResponse) => {
    console.log("Successfully hit the /user/ endpoint");

    let user = req.body;
    console.log("Request body:", user);

    res.status(200);
});