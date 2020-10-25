import React, { Component } from 'react'
import axios from 'axios'
import Exercisetype from '../component/exercisetype/Exercisetype'
import Searchbar from '../component/exercisetype/Searchbar'

class Extype extends Component {

    state = {
        isLoading: true,
        exercises: [],
    }

    getExtypeList = async () => {
        console.log(this.state.exercises)
        const {
            data: { exercise },
        } = await axios.get("http://127.0.0.1:8000/exercise/")
        console.log(exercise)
        this.setState({ exercises: exercise, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getExtypeList()
    }

    render() {
        const { isLoading, exercises } = this.state;
        // console.log(isLoading, exercises)
        
        return (
            <div style={{ width:"70%", margin:"auto"}}>
                <Searchbar />
                <div>{isLoading ? 'Loading' : exercises.map((ext) => {
                    return <Exercisetype
                        key={ext.idexercise}
                        idexercise={ext.idexercise}
                        type={ext.type}
                        imgexercise={ext.imgexercise} />
                })}</div>
            </div>
        )
    }
}

export default Extype