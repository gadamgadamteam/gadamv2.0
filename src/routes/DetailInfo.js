import React, { Component } from 'react'
import '../css/detailinfo.css'
import { Slide } from 'react-slideshow-image'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class DetailInfo extends Component {

  state = {
    isLoading: true,
    detail: [],
    ads: [],
  }

  getcrewList = async () => {
    const {
      data: { crew },
    } = await axios.get("http://127.0.0.1:8000/detail/", {
      params: { idcrew: this.props.match.params.idcrew },
    })
    this.setState({ detail: crew, isLoading: false })
  }

  // 참가하기 핸들러
  // axios post user_crew_join에 값 추가하는 api 만들어야됨

  componentDidMount() {
    // 데이터 로딩
    this.getcrewList()
  }

  render() {
    const { detail } = this.state
    console.log(detail)
    return (
      detail.map((data) => {
        return <div class="detailinfo">
          <div className="slide_crewimg">
            <Slide easing='ease'>
              {data.crew_images.map((image) => {
                return <div className="each-slide">
                  <img className='slide_img' src={image.url} />
                </div>
              })}
            </Slide>
          </div>
          <div className="crew_info">
            <div className="crew-box">
              <div className="crew_title">
                <h2 title="크루명"><span>{data.crewname}</span> 크루에 오신걸 환영합니다</h2>
                <br />
              </div>
              <div className="choose">
                <div className="like_btn">
                  <p className="like">Like</p>
                </div>
                <NavLink to='/'>
                  <div className="joinyes">
                    <input id="joiny" type="submit" value="참가하기" />
                  </div>
                </NavLink>
              </div>

            </div>
            <br />
            <div className="date-detail">
              <h3 className="detail">날짜</h3>
              <br />
              <h5 className="content"> 2020 / 07 / 01 / 수요일</h5>
            </div>
            <br />
            <div className="start-end-time">
              <h3 className="detail">시작 / 종료 시간</h3>
              <br />
              <h5 className="content">시작 시간 : {data.starttime}</h5>
              <h5 className="content">종료 시간 : {data.endtime}</h5>
            </div>
            <br />
            <div className="place-detail">
              <h3 className="detail">장소</h3>
              <br />
              <h5 className="content">{data.location}</h5>
            </div>
            <br />
            <div className="detail-detail">
              <h3 className="detail">준비물</h3>
              <br />
              <h5 className="content"> 개인 도시락, 물, 등산화 등</h5>
            </div>
            <br />
            <div className="crewking-detail">
              <h3 className="detail">크루장 소개</h3>
              <br />
              <div className="crew_captin">
                <div className="crew_captin_contact">
                  {/* <img width={200} height={200} src={kingpic} alt='kingpic' /> */}
                  <button className="contact_btn" onclick="openForm()">메세지 보내기</button>
                </div>
                <h5 className="content2"> 안녕하세유 크루장 덕새임니당어쩌구저쩌궁~~</h5>
              </div>
            </div>
            <br />
            <h3 className="detail">리뷰
          <select className="review_classifi">
                <option value={1} selected>전체보기</option>
                <option value={2}>최신순</option>
                <option value={3}>평점순</option>
              </select>
            </h3>
            <h5 className="content">
              <div className="review-box" >
                <div className="id">gadami@naver.com</div>
                <div className="review">짱이에요 오예</div>
              </div>
              <div className="review-box">
                <div className="id">gadamon@daum.com</div>
                <div className="review">별로에요 우우</div>
              </div>
            </h5>
            <br />
          </div>
        </div>
      })
    )
  }
}

export default DetailInfo
