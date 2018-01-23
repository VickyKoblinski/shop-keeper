<!-- Home component -->

<template>
  <div>
    <h1>Buy or Sell your Items</h1>
    <h6>Save Data</h6>
    <h6>End Day to begin a new Day!</h6>
    <hr>
    <p>Your Credits: {{credits}}☋</p>
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

</style>
