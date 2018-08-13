import Vue from 'vue'
import Vuex from 'vuex'
import dialogStore from '@/components/dialog-store'
Vue.use(Vuex)
export default new Vuex.Store({
//   state: {
// show: false
//   }
  modules: {
    dialog: dialogStore
  }
})
