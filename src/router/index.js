import Vue from 'vue'
import Router from 'vue-router'

import {
  Home,
  Components,
  Contact
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

    {
      path: '/components',
      name: 'Components',
      component: Components,
      meta: {
        displayName: 'MENU.MY_COMPONENTS.NAME',
        description: 'MENU.MY_COMPONENTS.DESCRIPTION'
      }
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        displayName: 'MENU.CONTACT.NAME',
        description: 'MENU.CONTACT.DESCRIPTION'
      }
    }
  ]
})
