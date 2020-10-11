import React, { Component } from 'react'
import {Thing} from "../components/thing";

export default class extends Component {
  constructor(props: React.ComponentProps<any>) {
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
      <Thing />
    </div>
    )
  }
}
