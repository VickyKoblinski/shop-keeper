<!-- Home component -->

<template>
  <div class="mx-5 my-3">
    <h1>Ahoy Shopkeep!</h1>
    <h2>Welcome to your Store</h2>
    <h5>Try to make money by buying and selling goods.</h5>
    <h6>End Day to begin a new one!</h6>
    <br>
    <p>Your Credits: {{credits | currency}}</p>
    <hr>
  <div>
    <p>
      This is a Vue.js Single-Page-Application project that implements the following features:
    </p>
    <ul>
      <li>Vue components</li>
      <li>Routes with vue-router</li>
      <li>State managment using Vuex</li>
      <li>Using vue-resource to store data</li>
      <li>Filters and directives</li>
      <li>Vue Animations and Transitions</li>
      <li>2-Way binding</li>
    </ul>
    <p><a href="https://github.com/VickyKoblinski/shop-keeper">Check out the code here!</a></p>
  </div>
  
  </div>
</template>

<script>
export default {
  computed: {
    credits() {
      return this.$store.getters.credits;
    }
  }
};
</script>

<style scoped>
/* div {
  margin: 20px 40px;
} */
</style>
