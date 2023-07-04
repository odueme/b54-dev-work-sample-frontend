import { Commit, createStore } from 'vuex'


export default createStore({
  state: {
    authenticated: false,
    showMessage: false,
    showOrderSuccess: false
 
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

    setOrderSuccess(state, order){
      state.showOrderSuccess= order
    }
  },


  actions: {
    setAuth({commit}, auth){
        commit('setAuth', auth)
    }, 
    setShowMessage({commit}, message){
      commit('setShowMessage', message)
    },
    setOrderSuccess({commit}, order){
      commit('showOrderSuccess', order)
    }
  },
  modules: {
  }
})
