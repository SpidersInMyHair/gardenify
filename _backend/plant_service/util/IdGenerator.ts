const md5 = require('md5');

import {PlantVariety} from "../../../protos/_backend/plant_service/protos/plant_pb";

export function generate(plantVariety: PlantVariety): string {
  const hexString = md5(plantVariety.getGenus().concat(plantVariety.getSpecies())).substring(0, 16);
  const base64String = Buffer.from(hexString, 'hex').toString('base64').replace(/\//g, "_");
  return `p${base64String}`;
}