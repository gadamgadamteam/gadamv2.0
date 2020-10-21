import { element } from 'prop-types';
import React, { Component } from 'react'
import '../../css/Filter.css'

class Selectbutton extends Component {

    state = {
      isSelected: false,
    }
  
    setSelected = () => {
      this.setState({
        isSelected: !this.state.isSelected
      })
    }
  
    render() {
      const { times, setTime } = this.props;
      return (
        <button
          id="sizeButton"
          className={this.state.isSelected ? 'selected' : ''}
          onClick={() => {
            this.setSelected();
            setTime(times);
          }}>
          {times}
        </button>
      )
    }
  }

  export default Selectbutton

  