import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 引入全局根级别的action和mutation
import actions from './actions'
import mutations from './mutations'

import test from './modules/test'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// 全局根级别的state
const state = {}

export default new Vuex.Store({
  modules: {
    test
  },
  state,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
