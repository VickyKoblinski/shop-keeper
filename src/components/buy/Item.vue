<!-- buy/Item component -->

<template>
<div class="col-sm-6">
  <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header">{{item.name}}
      <small>(Price: ☋{{item.price}})</small>
    </div>
    <div class="card-body text-success">
      <div class="input-group mb-3">
        <input 
          type="number" 
          class="form-control" 
          placeholder="Quantity"
          v-model="quantity"
        >
        <div class="input-group-append">
          <button 
            class="btn btn-success" 
            type="button"
            @click="buyItem"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["item"],
  methods: {
    buyItem() {
      const order = {
        itemId: this.item.id,
        itemPrice: this.item.price,
        quantity: this.quantity
      };
    }
  }
};
</script>

<style scoped>
.card {
  margin: 10px auto;
}
</style>
