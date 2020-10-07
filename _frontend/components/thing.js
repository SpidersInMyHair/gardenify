import React, { Component } from 'react'

export class Thing extends Component {
  constructor(props) {
    super(props)
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
