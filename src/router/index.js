import Vue from 'vue'
import Router from 'vue-router'

import {
  Home,
  Components
} from '@/pages'

Vue.use(Router)

export default new Router({
  mode: 'history', // no more hash with no ssr ?
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        displayName: 'MENU.HOME.NAME',
        description: 'MENU.HOME.DESCRIPTION'
      }
    },

    // Remove on production ?
    {
      path: '/components',
      name: 'Components',
      component: Components,
      meta: {
        displayName: 'MENU.MY_COMPONENTS.NAME',
        description: 'MENU.MY_COMPONENTS.DESCRIPTION'
      }
    }
  ]
})
