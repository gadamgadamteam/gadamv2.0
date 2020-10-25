import React, { Component } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import Crewinfo from '../component/crew/Crewinfo'
import Filter from '../component/filter/Filter'
import axios from 'axios'
import {Pagination } from '@material-ui/lab'

// const Profile = ({ match }) =>
class Searchcrewlist extends Component {

    state = {
        isLoading: false, // true
        info: [],
        states: ["모집중", "마감임박", "모집마감"],
    }

    getcrewList = async () => {
        const {
            data: {crew}
        } = await axios.get(`http://127.0.0.1:8000/search/searchword`, {
            params: {
                searchtype: this.props.match.params.searchtype,
                searchword: this.props.match.params.searchword
            },
        })
        this.setState({ info: crew, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getcrewList()
    }

    componentDidUpdate(newProps){
        // console.log(newProps)
        // this.getcrewList()
    }

    render() {
        const { isLoading, info, states } = this.state
        // console.log(info)
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
                 <Pagination count={20} color="primary" style={{ display:"table", margin:"auto"}}/>
            </div>            
        )
    }
}

export default Searchcrewlist