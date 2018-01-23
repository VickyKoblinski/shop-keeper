<!-- sell/Item component -->

<template>
<div class="col-sm-6">
  <div class="card border-info mb-3" style="max-width: 24rem; min-width: 20rem;">
    <div class="card-header">{{item.name}}
      <small>(Price: {{item.price}}☋ | Quantity: {{item.quantity}})</small>
    </div>
    <div class="card-body text-info">
      <div class="input-group mb-3">
        <input 
          type="number" 
          class="form-control" 
          placeholder="Quantity"
          v-model="quantity"
        >
        <div class="input-group-append">
          <button 
            class="btn btn-info" 
            type="button"
            @click="sellItem"
            :disabled="quantity <= 0  || !Number.isInteger(parseFloat(quantity))"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["item"],
  methods: {
    ...mapActions({
      sellItemAction: "sellItem"
    }),
    sellItem() {
      const order = {
        itemId: this.item.id,
        itemPrice: this.item.price,
        quantity: this.quantity
      };
      this.sellItemAction(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.card {
  margin: 10px auto;
}
</style>
