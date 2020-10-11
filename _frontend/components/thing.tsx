import React, {Component} from 'react'
import {
  GetPlantApiRequest,
  GetPlantApiResponse, getPlantItems, GetPlantItemsApiRequest, GetPlantItemsApiResponse,
  getPlantVariety
} from "../../_api/plant_api";


export class Thing extends Component {
  componentDidMount() {
    const getPlantReq: GetPlantApiRequest = {
      id: "test-plant1"
    };
    getPlantVariety(getPlantReq)
    .then((res: GetPlantApiResponse) => console.log(res.description));

    const getPlantItemsReq: GetPlantItemsApiRequest = {
      id: "test-plant1"
    };
    getPlantItems(getPlantItemsReq)
    .then((res: GetPlantItemsApiResponse) => console.log(res));
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
