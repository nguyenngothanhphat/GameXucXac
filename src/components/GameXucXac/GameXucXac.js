import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './GameXucXac.module.css';
import ThongTinTroChoi from './ThongTinTroChoi';
import XucXac from './XucXac';

class GameXucXac extends Component {
  render() {
    return (
      <div className={`${styles.game}`}>
        <h1 className="text-uppercase text-center display-2 mb-5">Game đổ xúc xắc</h1>
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <ul className={`${styles.listChon}`}>
                <li><button className={`${styles.btnDatCuoc}`} onClick={() => {this.props.datCuoc(true)}}>Tài</button></li>
                <li>
                  <XucXac />
                </li>
                <li><button className={`${styles.btnDatCuoc}`} onClick={() => {this.props.datCuoc(false)}}>Xỉu</button></li>
              </ul>
            </div>
          </div>
          <ThongTinTroChoi />
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-success" onClick={() => {this.props.playGame()}}>Play Game</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (chon) => {
      let action = {
        type: "DAT_CUOC",
        chon
      }
      dispatch(action);
    },
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      }
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(GameXucXac)
