import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import moduleCount from './moduleCount'

Vue.use(Vuex)
const state = {
  isLogin: true
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    moduleCount
  }
})
