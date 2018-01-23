import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if (data) {
        const items = data.items;
        const credits = data.credits;
        const inventory = data.inventory;

        const newInventory = {
          inventory,
          credits
        };

        commit('SET_ITEMS', items);
        commit('SET_INVENTORY', newInventory);

      }
    })
}