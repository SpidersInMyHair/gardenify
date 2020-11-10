import {Request, Response} from "express";
import {Send} from "express-serve-static-core";
import {
  Profile,
  User
} from "../../protos/_backend/user_service/protos/user_pb";

export interface GetUserRequest extends Request {
}

export type GetUserResponse = Response;

export interface GetUserByIdRequest extends Request {
  params: {
    id: string,
  };
}

export interface GetUserByIdResponse<ResBody = User> extends Response {
  send: Send<ResBody, this>;
}

export interface CreateUserRequest<ReqBody = { email: string, password: string }> extends Request {
  body: ReqBody;
}

export interface CreateUserResponse<ResBody = User> extends Response {
  send: Send<ResBody, this>;
}

export interface LoginUserRequest<ReqBody = { email: string, password: string }> extends Request {
  body: ReqBody;
}

export interface LoginUserResponse<ResBody = User> extends Response {
  send: Send<ResBody, this>;
}

export type LogoutUserRequest = Request;

export type LogoutUserResponse = Response;

export type GetUserProfileRequest = Request;

export interface GetUserProfileResponse<ResBody = Profile> extends Response {
  send: Send<ResBody, this>;
}

export interface UpdateUserProfileRequest<ReqBody = { email?: string, password?: string, name: string, description: string, image_url: string }> extends Request {
  body: ReqBody;
}

export interface UpdateUserProfileResponse<ResBody = Profile> extends Response {
  send: Send<ResBody, this>;
}