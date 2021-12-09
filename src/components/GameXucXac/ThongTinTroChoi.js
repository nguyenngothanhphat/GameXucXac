import React, { Component } from 'react';
import {connect} from 'react-redux';

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div className="row text-center mb-5">
        <div className="col-12">
          <p className="text-uppercase display-4">Bạn chọn: <span className="text-danger">{this.props.chon ? "TÀI" : "XỈU"}</span></p>
          <p className="display-4">Số bàn thắng: <span className="text-success">{this.props.banThang}</span></p>
          <p className="display-4">Tổng số bàn chơi: <span className="text-primary">{this.props.soLanChoi}</span></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chon: state.XucXacReducer.chon,
    banThang: state.XucXacReducer.soBanThang,
    soLanChoi: state.XucXacReducer.soBanChoi
  }
}

export default connect(mapStateToProps)(ThongTinTroChoi)
