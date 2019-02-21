import Vue from 'vue'
import Vuex from 'vuex'
import db from '../api/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    addRoom (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    getRoom (context) {
      let rooms = []
      db
        .collection('Rooms')
        .onSnapShot(function (snapShots) {
          snapShots.forEach((snapShot) => {
            rooms.push(snapShot.data())
          })
          context.commit('addRoom', rooms)
        })
    }
  }
})
