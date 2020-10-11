import React from 'react'
import {
  GetPlantApiResponse,
  getPlantItems,
  GetPlantItemsApiResponse,
  getPlantVariety
} from "../../_api/plant_api";

type Props = {}
type State = {
  plantVariety: GetPlantApiResponse,
  plantItems: GetPlantItemsApiResponse,
}

export class Thing extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plantVariety: null,
      plantItems: [],
    }
  }

  componentDidMount() {
    getPlantVariety({id: "test-plant1"})
    .then((res: GetPlantApiResponse) => this.setState({plantVariety: res}));
    getPlantItems({id: "test-plant1"})
    .then((res: GetPlantItemsApiResponse) => this.setState({plantItems: res}));
  }

  render() {
    return (
    <div className='center'>

      {this.state.plantVariety !== null ?
      <div>
        <p>{this.state.plantVariety.genus}</p>
        <p>{this.state.plantVariety.species}</p>
        <p>{this.state.plantVariety.description}</p>
      </div> : null
      }

      {this.state.plantItems.map((plantItem, i) =>
      <div key={i}>
        <p>{plantItem.itemName}</p>
        <p>{plantItem.quantity}</p>
      </div>
      )}

    </div>
    )
  }
}
