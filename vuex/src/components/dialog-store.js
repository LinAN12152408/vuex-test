export default {
  state: {
    show: false
  }, // $store.state.dialog.show
  // mutations: {
  //   switchDialog (state) {
  //     // state.show = state.show ? false : true
  //   }
  // }
  getters: {
    notShow (state) { // 对应上面的state
      return !state.show
    }
  } // $store.getters.notShow
}
