import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      resAuth: null,
      error: null,
    }
  },
  getters: {
    resAuth: state => state.resAuth,
    error: state => state.error
  },
  mutations: {
    auth(state, resAuth) {
      state.resAuth = resAuth
      localStorage.setItem('TOKEN', resAuth.accessToken )
    },
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {},
  modules: {}
})
