/** Data store */

import Vue from 'vue';
import Vuex from 'vuex';

import items from './modules/items';
import transactions from './modules/transactions';

Vue.use(Vuex);

/** Vuex - Modules
 * 
 * Due to using a single state tree, all state of our application 
 * is contained inside one big object. However, as our application 
 * grows in scale, the store can get really bloated.
 * 
 * To help with that, Vuex allows us to divide our store into modules. 
 * Each module can contain its own state, mutations, actions, getters, 
 * and even nested modules - it's fractal all the way down.
 * https://vuex.vuejs.org/en/modules.html
 */
export default new Vuex.Store({
  modules: {
    items,
    transactions
  }
});