import {NextApiRequest} from "next";
import {Env} from "next/dist/lib/load-env-config";

export class GardenifyRequest implements NextApiRequest {
    body: any;
    cookies: { [p: string]: string };
    env: Env;
    query: { [p: string]: string | string[] };
}