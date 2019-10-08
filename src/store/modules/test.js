// init state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAll ({ commit }) {
    commit('setAll', ['all'])
  }
}

// mutations
const mutations = {
  setAll (state, val) {
    state.all = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
