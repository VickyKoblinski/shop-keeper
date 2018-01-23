<!-- Header component -->

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Shop Keeper</router-link>

  <!-- TODO: Wire up mobile button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

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
      <li class="nav-item dropdown">
        <a 
          class="nav-link dropdown-toggle" 
          href="#" 
          id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false"
        >
          Save & Load <span class="caret"></span>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Save</a>
          <a class="dropdown-item" href="#">Load</a>
        </div>
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
    ...mapActions(["RANDOMIZE_ITEMS"]),
    endDay() {
      this.RANDOMIZE_ITEMS();
    }
  }
};
</script>

<style scoped>

</style>
