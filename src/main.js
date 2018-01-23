import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'
import VueResource from 'vue-resource';
import config from '../config';

// Wires up * to global Vue object
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = config.SERVER_ADDRESS;

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
