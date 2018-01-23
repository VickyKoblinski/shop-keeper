<!-- Header component -->

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Shop Keeper</router-link>

  <!-- Mobile buttons -->
  <div class="btn-group navbar-toggler" role="group">
    <router-link to="/sell" activeClass="active" tag="button" class="btn btn-primary">
      Sell
    </router-link>
    <router-link to="/buy" activeClass="active" tag="button" class="btn btn-primary">
      Buy
    </router-link>
  </div>
  <div class="btn-group navbar-toggler" role="group">
    <button type="button" class="btn btn-info" @click="endDay">End Day</button>
    <button type="button" class="btn btn-success" @click="save">Save</button>
    <button type="button" class="btn btn-secondary" @click="load">Load</button>
  </div>
  <div class="btn-group navbar-toggler" role="group">
    <button type="button" class="btn btn-secondary disabled">Credits: {{credits | currency}}</button>
  </div>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <router-link to="/sell" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">Sell</a>
      </router-link>
      <router-link to="/buy" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">Buy</a>
      </router-link>
    </ul>

    <!-- Righthand side of Navigation -->
    <ul class="navbar-nav my-2 my-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#" @click="endDay">End Day</a>
      </li>
      <!-- TODO: Implement Save and Load -->
      <li class="btn-group ml-1 mr-3" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-success" @click="save">Save</button>
        <button type="button" class="btn btn-secondary" @click="load">Load</button>
      </li>
    </ul>

    <!-- Credits display -->
    <strong class="navbar-text navbar-right">Credits: {{credits | currency}}</strong>
  </div>
</nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    credits() {
      return this.$store.getters.credits;
    }
  },
  methods: {
    ...mapActions(["RANDOMIZE_ITEMS", "loadData"]),
    endDay() {
      this.RANDOMIZE_ITEMS();
    },
    save() {
      const data = {
        credits: this.$store.getters.credits,
        inventory: this.$store.getters.inventory,
        items: this.$store.getters.items
      };
      this.$http.put("data.json", data);
    },
    load() {
      this.loadData();
    }
  }
};
</script>

<style scoped>

</style>
