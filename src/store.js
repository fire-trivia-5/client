import Vue from 'vue'
import Vuex from 'vuex'
import db from '../api/firestore'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomList: [],
    quiz: [],
    playerscore: 0,
    dataUser: {}
  },
  mutations: {
    updateScore (state, payload) {
      for (let i = 0; i <= state.roomList.length - 1; i++) {
        if (state.roomList[i].id === payload.roomId) {
          for (let j = 0; j <= state.roomList[i].players.length - 1; j++) {
            if (state.roomList[i].players[j].name === payload.player) {
              state.roomList[i].players[j].score = Number(state.roomList[i].players[j].score) + 1
            }
          }
        }
      }
    },
    mutateRoom (state, payload) {
      state.roomList = payload
    },
    initialData (state, arrRoom) {
      state.roomList = arrRoom
    },
    mutateDataUser (state, payload) {
      state.dataUser = payload
    },
    changeScore (state, playerscore) {
      state.playerscore = playerscore
    },
    addQuiz (state, payload) {
      state.quiz = payload
    },
    finishGame (state) {
      router.push({ path: '/' })
    }
  },
  actions: {
    createRoom ({ commit }, dataObj) {
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
    getRoom ({ commit }) {
      db
        .collection('Rooms')
        .onSnapshot(function (querySnapshot) {
          const data = querySnapshot.docs.map(function (doc) {
            return { id: doc.id, ...doc.data() }
          })
          commit('initialData', data)
        })
    },
    createUser (name) {
      db
        .collection ('Users')
        .add({
          name: name
        })
        .then((document) => {
          console.log(`document successfuly written with id ${document.id}`)
        })
        .catch(err => {
          console.log(`error writing document ${err}`)
        })
    },
    setUser ({ commit }, payload) {
      commit('mutateDataUser', payload)
    },
    changeScore ({ commit }, playerscore) {
      commit('changeScore', playerscore)
    },
    getQuiz (context) {
      axios
        .get('https://opentdb.com/api_token.php?command=request')
        .then(({ data }) => {
          return axios.get(`https://opentdb.com/api.php?amount=10&token=${data.token}`)
        })
        .then(({ data }) => {
          context.commit('addQuiz', data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
