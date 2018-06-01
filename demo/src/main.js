import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BlogMenu } from '../../src'
Vue.use(BlogMenu)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
