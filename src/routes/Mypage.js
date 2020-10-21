import React from 'react'
import { Button } from 'reactstrap'
// import axios from 'axios'
import Cart from '../component/mypage/Cart'
import Completed from '../component/mypage/Completed'
import Host from '../component/mypage/Host'
import Ongoing from '../component/mypage/Ongoing'

class Mypage extends React.Component {
    state = {
        isLoading: true,
        carts: [],
        completes: [],
        Hosts: [],
        Ongoings: [],
    }

    getcartList = async () => {
        // const {
        //     data: { cart },
        // } = await axios.get("http://127.0.0.1:8000/crew/")
        // console.log(cart)
        // this.setState({ carts: cart, isLoading: false })
        this.setState({ isLoading: false })
    }

    componentDidMount() {
        // 데이터 로딩
        this.getcartList()
    }

    render() {
        const { isLoading, carts } = this.state;
        return (
            <div>
                <div style={{display:"inline"}}>
                    <h1>{/* 유저 이름 */} 마이페이지</h1>
                    <Button outline color="secondary">회원정보수정</Button>{' '}
                </div>
                <div>
                    <div>
                    <h3>나의 운동 일정</h3>
                    <Ongoing />
                    </div>
                    <div>
                    <h3>지난 크루 리뷰</h3>
                    <Completed />
                    </div>
                    <div>
                    <h3>내가 개설한 크루</h3>
                    <Host />
                    </div>
                    <div>
                    <h3>내가 찜한 크루</h3>
                    <Cart />
                    </div>
                </div>
                {/* //</div> <div>{isLoading ? 'Loading' : carts.map((cart) => {
            //     return <Cart
            //         key={cart.idcrew}
            //         idcrew={cart.idcrew}
            //         crewname={cart.crewname}
            //         starttime={cart.starttime} />
            // })}</div>) */}
            </div>
        )
    }
}

export default Mypage;