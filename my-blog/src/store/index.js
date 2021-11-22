import { createStore } from 'vuex'

const store = createStore({
  state: {
    points: 0
  },
  mutations: {
    updatePoints(state, payload) {
      state.points = state.points + payload
    }
  }
})

// export the store
export default store