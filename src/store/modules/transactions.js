
const state = {
  credits: 10000,
  items: []
}

const mutations = {

  /**
   * Handles buying an item
   * @param {object} state Current funds and items 
   * @param {object} item Item to buy
   * @param {number} item.itemId Item ID
   * @param {number} item.quantity # of this item to buy
   * @param {number} item.price Price per item
   */
  BUY_ITEM(state, { itemId, quantity, itemPrice }) {
    const myItem = state.items.find(item => item.id === itemId);
    // If item exists in inventory, increase quantity,
    // else add item as new entry
    if (myItem) {
      myItem.quantity += quantity;
    } else {
      state.items.push({
        id: itemId,
        quantity
      });
    }
    // Update credits
    state.credits -= itemPrice * quantity;
  },

  /**
   * Handles selling an item
   * @param {object} state Current funds and items 
   * @param {object} item Item to sell
   * @param {number} item.itemId Item ID
   * @param {number} item.quantity # of this item to sell
   * @param {number} item.price Price per item
   */
  SELL_ITEM(state, { itemId, quantity, itemPrice }) {
    const myItem = state.items.find(item => item.id === itemId);

    // If I have more items than what I'm selling, deduct from my inventory
    // else if I'm left with 0 or less items, remove this item from my state
    if (myItem.quantity > quantity) {
      myItem.quantity -= quantity;
    } else {
      state.items.splice(state.items.indexOf(myItem), 1);
    }

    // Update credits
    state.credits += itemPrice * quantity;
  }
};


const actions = {
  sellItem({ commit }, order) {
    commit('SELL_ITEM', order);
  }
}

const getters = {

  /**
   * Get inventory
   * @param {object} state 
   * @param {object} getters Reference to all getters
   * @returns {object} Inventory list with item id, quantity, name, and price
   */
  inventory(state, getters) {
    return state.items.map(item => {
      // Get matching item from items getter
      const itemFromItemsModule = getters.items.find(
        itemFromItemsModule => itemFromItemsModule.id === item.id
      );

      // Use itemFromItemsModule to get item's name and current price
      return {
        id: item.id,
        quantity: item.quantity,
        name: itemFromItemsModule.name,
        price: itemFromItemsModule.price
      }
    })
  },
  credits(state) {
    return state.credits
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}