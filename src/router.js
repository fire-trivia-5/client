import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/waitingroom',
      name: 'waitingRoom',
      component: () => import('./views/WaitingRoom.vue')
    },
    {
      path: '/playingroom',
      name: 'playingroom',
      component: () => import('./views/PlayingRoom.vue')
    }
  ]
})
