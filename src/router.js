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
    // {
    //   path: '/waitingroom',
    //   name: 'waitingRoom',
    //   component: () => import('./views/WaitingRoom.vue')
    // },
    {
      path: '/:roomId',
      name: 'playingroom',
      component: () => import('./views/Play.vue')
    },
    {
      path : '/result',
      name : 'Result',
      component : () => import('./views/Result.vue')
    }
  ]
})
