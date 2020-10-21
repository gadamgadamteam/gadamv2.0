import React, {Component} from 'react'
import Time from './Time'
import Location from './Location'
import Extrafilter from './Extrafilter'

class Filter extends Component {
    render() {
        return (
            <div>
                <Extrafilter />
                <Time />
                <Location />
            </div>
        )
    }
}

export default Filter