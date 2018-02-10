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
