import React, { Component } from 'react'
import Timers from '@modules/Timers'

export default class Homepage extends Component<unknown, unknown> {
  render() {
    return (
      <div>
        <h1>TITLE</h1>
        <Timers />
      </div>
    )
  }
}
