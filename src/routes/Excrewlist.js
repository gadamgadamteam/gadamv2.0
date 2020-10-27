import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import Crewinfo from '../component/crew/Crewinfo'
import Filter from '../component/filter/Filter'
import axios from 'axios'
import { Pagination } from '@material-ui/lab'

// const Profile = ({ match }) =>
class Excrewlist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            info: [],
            states: ["모집중", "마감임박", "모집마감"],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = async (event, value) => {
        console.log(value)
        const {
            data: { crew },
        } = await axios.get(`http://127.0.0.1:8000/crew/${this.props.match.params.idexercise}`, {
            params: { page: value }
        })
        this.setState({ info: crew})
    }

    getexcrewList = async () => {
        const {
            data: { crew },
        } = await axios.get(`http://127.0.0.1:8000/crew/${this.props.match.params.idexercise}`,{
            params: { page: 0 }
        })
        this.setState({ info: crew, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getexcrewList()
    }

    render() {
        const { isLoading, info, states } = this.state

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
                <Pagination count={20} color="primary" onChange={this.handleChange} style={{ display: "table", margin: "auto" }} />
            </div>
        )
    }
}

export default Excrewlist