import React, { Component } from 'react'
import '../../css/Filter.css'
import Locationbutton from './Locationbutton'

class Location extends Component {

    state = {
        locations: [ "서울", "경기", "인천", "대전", "부산", "대구", "광주", "전주", "울산", "나주"]
    }

    setLoc = (loc) => {
    
    }

    render() {
        const { locations } = this.state
        return (
            <div className='location-filter' style={{ display:"flex", overflow:"auto"}}>
                    {locations.map((loc) => {
                        return (<Locationbutton loc={loc} setLoc={this.setLoc} />)
                    })}
            </div>
        )
    }
}

export default Location