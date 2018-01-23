<!-- buy/Item component -->

<template>
<div class="col-sm-6">
  <div class="card border-success mb-3" style="max-width: 26rem;">
    <div class="card-header">{{item.name}}
      <small>(Price: {{item.price}}☋)</small>
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
            class="btn"
            :class="insufficentCredits ? 'btn-danger' : 'btn-success'" 
            type="button"
            @click="buyItem"
            :disabled="insufficentCredits || quantity <= 0  || !Number.isInteger(parseFloat(quantity))"
          >
            {{insufficentCredits ? 'Insufficent Funds' : 'Button' }}
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
  computed: {
    credits() {
      return this.$store.getters.credits;
    },
    insufficentCredits() {
      return this.quantity * this.item.price > this.credits;
    }
  },
  methods: {
    buyItem() {
      const order = {
        itemId: this.item.id,
        itemPrice: this.item.price,
        quantity: this.quantity
      };
      this.$store.dispatch("BUY_ITEM", order);
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
