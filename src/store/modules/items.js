/** Items Module */

import items from '../../data/items';

/** Vuex - State
 * 
 * Vuex uses a single state tree - that is, this single object 
 * contains all your application level state and serves as the 
 * "single source of truth". This also means usually you will have 
 * only one store for each application. A single state tree makes 
 * it straightforward to locate a specific piece of state, and 
 * allows us to easily take snapshots of the current app state 
 * for debugging purposes.
 * https://vuex.vuejs.org/en/state.html
 */
const state = {
  items: []
};

/** Vuex - Getters
 * 
 * Computed properties for stores. Like computed properties, 
 * a getter's result is cached based on its dependencies, 
 * and will only re-evaluate when some of its dependencies have 
 * changed.
 * https://vuex.vuejs.org/en/getters.html
 */
const getters = {
  items: state => state.items
};

/** Vuex - Mutations
 * 
 * The only way to actually change state in a Vuex store is by 
 * committing a mutation. Vuex mutations are very similar to events: 
 * each mutation has a string type and a handler. The handler 
 * function is where we perform actual state modifications, and 
 * it will receive the state as the first argumen
 * https://vuex.vuejs.org/en/mutations.html
 */
const mutations = {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  RND_ITEMS(state) {
    state.items.forEach(item => {
      //Randomizes the new price by multiplying current price by a number from 0.5 to 1.5
      item.price = Math.round(item.price * (1 + Math.random() - 0.5));
    });
  }
};

/** Vuex - Actions
 * 
 * Actions are similar to mutations, the differences being that:
   - Instead of mutating the state, actions commit mutations.
   - Actions can contain arbitrary asynchronous operations.
 * https://vuex.vuejs.org/en/actions.html
 */
const actions = {
  BUY_ITEM: ({ commit }, order) => commit('BUY_ITEM', order), //from modules/transactions
  INIT_ITEMS: ({ commit }) => commit('SET_ITEMS', items),
  RANDOMIZE_ITEMS: ({ commit }) => commit('RND_ITEMS')
};



export default {
  state,
  getters,
  mutations,
  actions
}