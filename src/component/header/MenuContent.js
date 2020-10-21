import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../css/MenuContent.css'
import { Link } from 'react-router-dom'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.menu = {
      items: ["홈", "운동별 CREW", "전체 CREW", "마이페이지"],
      urls: ["", "exercisecrew", "crewlist", "mypage"]
    }
  }

  render() {
    return (
      <div display="inline" style={{margin:0}}>
        {this.menu.items.map((i, u) => <div className="menu-item" key={i}>
          <Link to={`/${this.menu.urls[u]}`}>
            {i}
          </Link>
        </div>)}
      </div>
    )
  }
}

// MenuContent.propTypes = {
//   closeCallback: PropTypes.func.isRequired
// }

export default MenuContent
