import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.xucXac.map((item, index) => {
      return (
        <img src={`./img/${item}.png`} alt={item} key={index} style={{width: "15%"}} />
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderXucXac()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    xucXac: state.XucXacReducer.xucXac
  }
}

export default connect(mapStateToProps)(XucXac);
