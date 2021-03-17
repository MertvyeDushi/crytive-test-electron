import Vue from 'vue'
import Router from 'vue-router'

import MainView from '@/views/MainView'
import AboutView from '@/views/AboutView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
