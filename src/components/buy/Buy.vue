<!-- Buy component -->

<template>
  <div class="row">
    <app-item 
      v-for="item in items" 
      :key="item.id"
      :item="item"
    ></app-item>
  </div>
</template>

<script>
import Item from "./Item.vue";

/** Temporary data for developing with */
const dummyData = [
  { id: 1, name: "Golden Sword", price: 110 },
  { id: 2, name: "Carrot", price: 52 },
  { id: 3, name: "Plain Boots", price: 50 },
  { id: 4, name: "Bear Fur", price: 134 }
];

export default {
  data() {
    return {
      items: dummyData
    };
  },
  components: {
    appItem: Item
  }
};
</script>

<style scoped>
div {
  padding-top: 10px;
}
</style>
