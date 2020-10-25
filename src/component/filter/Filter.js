import React, { Component } from 'react'
import Time from './Time'
import Location from './Location'
import Extrafilter from './Extrafilter'
import { KeyboardDatePicker } from '@material-ui/lab'

class Filter extends Component {
    render() {
        return (
            <div>
                <p className='datepick-q'><input type='date' /></p>
                <Extrafilter />
                <Time />
                <Location />
            </div>
        )
    }
}

export default Filter