import React from 'react'
import { Button } from 'reactstrap'
// import axios from 'axios'
import Cart from '../component/mypage/Cart'
import Completed from '../component/mypage/Completed'
import Host from '../component/mypage/Host'
import Ongoing from '../component/mypage/Ongoing'
import axios from 'axios'

class Mypage extends React.Component {
    state = {
        isLoading: true,
        carts: [],
        completes: [],
        Hosts: [],
        Ongoings: [],
    }

    getOngoingList = async () => {
        const {
            data: { crew },
        } = await axios.get("http://127.0.0.1:8000/mypage/myplan", {
            params: { iduser: 1 }
        })
        crew.map((data) => {
            this.setState({ Ongoings: data.crews })
        })
        // this.setState({ Ongoings: crew })
    }

    getHostsList = async () => {
        const {
            data: { crewinfo },
        } = await axios.get("http://127.0.0.1:8000/mypage/hostcrew", {
            params: { iduser: 1 }
        })
        console.log(crewinfo)
        this.setState({ Hosts: crewinfo })
    }

    getReviewlist = async () => {
        const {
            data: { crewinfo },
        } = await axios.get("http://127.0.0.1:8000/mypage/lastcrew", {
            params: { iduser: 1 }
        })
        console.log(crewinfo)
        this.setState({ completes: crewinfo })
    }

    getcartList = async () => {
        const {
            data: { crewinfo },
        } = await axios.get("http://127.0.0.1:8000/cart", {
            params: { iduser: 1 }
        })
        this.setState({ carts: crewinfo, isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getOngoingList()
        this.getHostsList()
        this.getReviewlist()
        this.getcartList()
    }

    render() {
        const { isLoading, carts, Ongoings, Hosts, completes } = this.state;
        console.log(Ongoings)
        return (
            <div style={{ width: "70%", margin: "auto" }}>
                <div >
                    <h1>{/* 유저 이름 */} 마이페이지</h1>
                    <Button outline color="secondary" style={{ position: "absolute", right: "20%" }}>회원정보수정</Button>
                </div>
                <h3>나의 운동 일정</h3>
                <div style={{ overflow: "auto", display: "inline-flex" }}>
                    {Ongoings.map((data) => {
                        console.log(data)
                        return <Ongoing
                            idcrew={data.idcrew}
                            crewname={data.crewname}
                            starttime={data.starttime}
                            location={data.province}
                        />
                    })}
                </div>
                <h3>지난 크루 리뷰</h3>
                <div style={{ overflow: "auto", display: "inline-flex" }}>
                    {completes.map((data) => {
                        console.log(data)
                        return <Completed
                            idcrew={data.idcrew}
                            crewname={data.crewname}
                            starttime={data.starttime}
                            location={data.province}
                        />
                    })}
                </div>
                <h3>내가 개설한 크루</h3>
                <div style={{ overflow: "auto", display: "inline-flex" }}>
                    {Hosts.map((data) => {
                        console.log(data)
                        return <Host
                            idcrew={data.idcrew}
                            crewname={data.crewname}
                            starttime={data.starttime}
                            location={data.province}
                        />
                    })}
                </div>
                <h3>내가 찜한 크루</h3>
                <div style={{ overflow: "auto", display: "inline-flex" }}>
                    {carts.map((data) => {
                        console.log(data)
                        return <Cart
                            idcrew={data.idcrew}
                            crewname={data.crewname}
                            starttime={data.starttime}
                            location={data.province}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Mypage;