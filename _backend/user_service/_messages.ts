import {Request, Response} from "express";
import {Send} from "express-serve-static-core";
import {
  User
} from "../../protos/_backend/user_service/protos/user_pb";

export interface GetUserRequest extends Request {
  params: {
    id: string,
  };
}

export interface GetUserResponse<ResBody = User> extends Response {
  send: Send<ResBody, this>;
}

export interface CreateUserRequest<ReqBody = { email: string, password: string }> extends Request {
  body: ReqBody;
}

export interface CreateUserResponse<ResBody = User> extends Response {
  send: Send<ResBody, this>;
}