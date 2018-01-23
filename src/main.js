import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

// Wires up our router to global Vue object
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', // Option for no # in URL
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
