// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueWording from 'vue-wording'
import wording from '@/wording.json'
import { getCountry } from './country'

Vue.config.productionTip = false

// for internationalization I have to know the language to be displayed before application bootstrap
getCountry()
  .then(country => {
    Vue.use(vueWording, {lang: country, wording})
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  })
