import React from 'react'
import axios from 'axios'
import Crew from '../component/main/Crews'
import Advertisement from '../component/main/Advertisement'
import { Fab } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import '../css/Home.css'
import { NavLink } from 'react-router-dom'

class Home extends React.Component {
    state = {
        isLoading: true,
        crews: [],
        ads: [],
    }

    getcrewList = async () => {
        const {
            data: { crew },
        } = await axios.get("http://127.0.0.1:8000/crew/")
        this.setState({ crews: crew, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getcrewList()
    }

    render() {
        const { isLoading, crews, ads } = this.state;
        
        return (
            <div style={{ textAlign: "center" }}>
                <Advertisement />
                <h1>실시간 인기 크루</h1>
                <h1>찜이 많은 크루</h1>
                <div>{isLoading ? 'Loading' : crews.map((crew) => {
                    return <Crew
                        key={crew.idcrew}
                        idcrew={crew.idcrew}
                        crewname={crew.crewname}
                        starttime={crew.starttime}
                        state={crew.state}
                        hashtags={crew.hashtags} />
                })}</div>
                <NavLink to='/createcrew'>
                <Fab variant="extended" style={{position:"fixed", right:"50px", bottom:"50px"}}>
                    <FitnessCenterIcon/>
                     크루 모집하기
                </Fab>
                </NavLink>
            </div>)
    }
}

export default Home;