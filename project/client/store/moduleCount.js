export default {
  actions: {
    NUMBER_COUNT: ({
      commit
    }) => {
      commit("NUMBER_COUNTT")
    }
  },
  mutations: {
    "NUMBER_COUNTT"(state) {
      state.count++;
    }
  },
  getters: {
    numcount(state) {
      return state.count
    }
  },
  state: {
    count: 0
  }
}
