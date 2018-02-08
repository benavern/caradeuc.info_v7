import Vue from 'vue'
import Router from 'vue-router'

import {
  Home,
  Components
} from '@/pages'

Vue.use(Router)

export default new Router({
  // mode: 'history', // no hands on on backend for the moment we stick on the hash technic
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    // Remove on production ?
    {
      path: '/components',
      name: 'Components',
      component: Components
    }
  ]
})
