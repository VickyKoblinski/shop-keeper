import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Wires up our router to global Vue object
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
