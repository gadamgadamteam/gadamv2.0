import React, { Component } from 'react'
import '../../css/Filter.css'
import Timebutton from './TImebutton'

class Time extends Component {

    state = {
        times: [ "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00",
        "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    }

    setTime = (times) => {
    
    }

    render() {
        const { times } = this.state
        return (
            <div className='time-filter' style={{ display:"flex", overflow:"auto"}}>
                    {times.map((time) => {
                        return (<Timebutton times={time} setTime={this.setTime} />)
                    })}
            </div>
        )
    }
}

export default Time