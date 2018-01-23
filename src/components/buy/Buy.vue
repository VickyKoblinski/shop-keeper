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

export default {
  components: {
    appItem: Item
  },
  computed: {
    items() {
      return this.$store.getters.items;
    }
  }
};
</script>

<style scoped>
div {
  padding-top: 10px;
}
</style>
