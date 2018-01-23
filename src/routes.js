/**
 * Routes used by vue-router
 */

import Home from './components/Home.vue'
import Buy from './components/buy/Buy.vue'
import Sell from './components/sell/Sell.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/buy', component: Buy },
  { path: '/sell', component: Sell }
]