import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import Carousel from 'react-bootstrap/Carousel'
import "../../css/carousel.css"

// class로 바꾸고 이미지 받아오기
function Advertisement() {

  var urls = [
    "https://gadam.s3.ap-northeast-2.amazonaws.com/Advertisement/Advertisement1.jpg",
    "https://gadam.s3.ap-northeast-2.amazonaws.com/Advertisement/Advertisement2.jpg",
    "https://gadam.s3.ap-northeast-2.amazonaws.com/Advertisement/Advertisement3.jpg",
  ]

  return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={urls[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={urls[1]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={urls[2]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  )
}

export default Advertisement