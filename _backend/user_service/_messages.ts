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

export interface GetProfileResponse<ResBody = Profile> extends Response {
  send: Send<ResBody, this>;
}

export interface CreateProfileRequest<ReqBody = { id: int, name: string ,about_me: string, brief_desc: string}> extends Request {
  body: ReqBody;
}

export interface CreateProfileResponse<ResBody = Profile> extends Response {
  send: Send<ResBody, this>;
}
