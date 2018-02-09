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
      component: Home,
      meta: {
        displayName: 'Accueil',
        description: 'Un peu de tout...'
      }
    },

    // Remove on production ?
    {
      path: '/components',
      name: 'Components',
      component: Components,
      meta: {
        displayName: 'Mes composants',
        description: 'Pour construire ce site.'
      }
    }
  ]
})
