import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exercises:[]
  },
  mutations: {
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    }
  },
  actions: {
  },
  modules: {
  }
})
