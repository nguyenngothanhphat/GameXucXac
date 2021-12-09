const stateDefault = {
  chon: true, // True là tài, False là xỉu
  xucXac: [1, 2, 3],
  soBanThang: 0,
  soBanChoi: 0
}

const XucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "PLAY_GAME": {
      let xucXac = [];
      for (var i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 6 + 1);
        xucXac.push(num);
      }
      state.xucXac = xucXac;
      state.soBanChoi++;
      let tong = xucXac.reduce((tong, num) => {
        return tong += num
      }, 0)
      if (tong <= 11 && !state.chon) {
        state.soBanThang++;
      } else if (tong > 11 && state.chon) {
        state.soBanThang++;
      }
      state = {...state}
      return {...state}
    }
    case "DAT_CUOC": {
      state.chon = action.chon;
      state = {...state}
      return {...state}
    }
    default:
      return {...state}
  }
}

export default XucXacReducer;