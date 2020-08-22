import React, { Component } from 'react'
import Timer from '@components/Timer'
class Timers extends Component<unknown, unknown> {
  render() {
    const timerCount = [1,2,3,4]
    return (
      <div style={{display: 'flex', margin: 10}}>
        {timerCount.map(() => <Timer />)}
      </div>
    )
  }
}


export default Timers