import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'
import App from './App'

import './scss/app.scss'

Vue.use(BootstrapVue)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})