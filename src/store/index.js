import { Commit, createStore } from 'vuex'


export default createStore({
  state: {
    authenticated: false,
    showMessage: false,
    showCart: false
 
  },
  getters: {
  },
  mutations: {
    setAuth(state, auth){
    state.authenticated = auth
    },
    setShowMessage(state, message){
      state.showMessage = message
    },
  },


  actions: {
    setAuth({commit}, auth){
        commit('setAuth', auth)
    }, 
    setShowMessage({commit}, message){
      commit('setShowMessage', message)
    }
  },
  modules: {
  }
})
