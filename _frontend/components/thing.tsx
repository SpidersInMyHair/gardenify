import React, { Component } from 'react'
import {getPlantVariety} from "../../_api/plant";
import {GetPlantApiRequest, GetPlantApiResponse} from "../../protos/_api/protos/plant_pb";


export class Thing extends Component {
  componentDidMount() {
    const getPlantReq: GetPlantApiRequest.AsObject = {
      id: "test-plant1"
    };
    getPlantVariety(getPlantReq)
    .then((res: GetPlantApiResponse.AsObject) => console.log(res.description));
  }

  render() {
    return (
    <div className='center'>
      <p><s> Recipething </s></p>
      <p> Gardenify </p>
    </div>
    )
  }
}
