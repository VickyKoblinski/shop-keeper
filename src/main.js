import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

// Wires up our router to global Vue object
Vue.use(VueRouter);

Vue.filter('currency', value => value.toLocaleString() + '☋')

const router = new VueRouter({
  mode: 'history', // Option for no # in URL
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
