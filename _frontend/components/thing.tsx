import React, {Component} from 'react'
import {
  GetPlantApiRequest,
  GetPlantApiResponse,
  getPlantVariety
} from "../../_api/plant_api";


export class Thing extends Component {
  componentDidMount() {
    const getPlantReq: GetPlantApiRequest = {
      id: "test-plant1"
    };
    getPlantVariety(getPlantReq)
    .then((res: GetPlantApiResponse) => console.log(res.description));
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
