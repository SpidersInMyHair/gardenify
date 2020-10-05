import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  // Ensure that an API call is successful.
  testBackendService() {
    fetch('/home/test')
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
  }

  componentDidMount() {
    this.testBackendService()
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
