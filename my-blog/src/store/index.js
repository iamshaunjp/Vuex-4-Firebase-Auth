import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state changed:', state.user)
    }
  },
  actions: {
    signup(context, { email, password }) {
      console.log('signup action')

      // async code
      setTimeout(() => {
        context.commit('setUser', { email, password })
      }, 2000)
    }
  }
})

// export the store
export default store