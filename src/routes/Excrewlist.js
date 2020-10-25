import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import Crewinfo from '../component/crew/Crewinfo'
import Filter from '../component/filter/Filter'
import axios from 'axios'

// const Profile = ({ match }) =>
class Excrewlist extends Component {

    state = {
        isLoading: true,
        info: [],
        states: ["모집중", "마감임박", "모집마감"],
    }

    getexcrewList = async () => {
        const {
            data: { crew },
        } = await axios.get(`http://127.0.0.1:8000/crew/${this.props.match.params.idexercise}`)
        this.setState({ info: crew, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getexcrewList()
    }

    render() {
        const { isLoading, info, states } = this.state
        console.log(info)

        return (
            <div style={{ width:"70%", margin:"auto"}}>
                <Filter />
                <div>{isLoading ? 'Loading' : info.map((crew) => {
                    return <Crewinfo
                        key={crew.idcrew}
                        idcrew={crew.idcrew}
                        crewname={crew.crewname}
                        starttime={crew.starttime}
                        hashtags={crew.hashtags}
                        state={states[crew.state]} />
                })}</div>
            </div>
        )
    }
}

export default Excrewlist