import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/api/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  
    roomList: [],
    playermove: 'smile',
    playerscore: 0,
    dataUser: {}
  },
  mutations: {
    mutateRoom(state, payload) {
      state.roomList = payload
    },
    initialData(state, arrRoom) {
      state.roomList = arrRoom
    },
    mutateDataUser(state, payload) {
      state.dataUser = payload
    },
    changeMove(state, playermove) {
      state.playermove = playermove
    },
    changeScore(state, playerscore) {
      state.playerscore = playerscore
    },
  },
  actions: {
    //dipakai di view/home -> component/createroom
    createRoom({ commit }, dataObj) {
      db
        .collection('Rooms')
        .add({
          roomName: dataObj.roomName,
          capacity: dataObj.capacity,
          players: []
        })
        .then((doc) => {
          return db
            .collection('Rooms')
            .get()
        })
        .then(snapshot => {
          let data = []
          snapshot.forEach(elemen => {
            data.unshift({ id: elemen.id, ...elemen.data() })
          })
          console.log(data)
          commit('mutateRoom', data)
        })
        .catch(function (err) {
          console.error(`error writing document: ${err}`)
        })
    },
    //dipakai di view/home -> component/roomlist
    getRoom({ commit }) {
      db
        .collection('Rooms')
        .onSnapshot(function (querySnapshot) {
          const data = querySnapshot.docs.map(function (doc) {
            return { id: doc.data().id, ...doc.data() }
          })
          commit('initialData', data)
        })
    },
    createUser({commit}, name){
      db
        .collection("Users")
        .add({
          name : name
        })
        .then((document) => {
          console.log(`document successfuly written with id ${document.id}`)
        })
        .catch(err => {
          console.log(`error writing document ${err}`)
        })
    },
    //dipakai di component/roomList
    setUser({ commit }, payload) {
      commit('mutateDataUser', payload)
    },
    changeMove({ commit }, playermove) {
      commit('changeMove', playermove)
    },
    changeScore({ commit }, playerscore) {
      commit('changeScore', playerscore)
    },
  }
})
