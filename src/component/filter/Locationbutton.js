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
      const { loc, setLoc } = this.props;
      return (
        <button
          id="sizeButton"
          className={this.state.isSelected ? 'selected' : ''}
          onClick={() => {
            this.setSelected();
            setLoc(loc);
          }}>
          {loc}
        </button>
      )
    }
  }

  export default Selectbutton

  