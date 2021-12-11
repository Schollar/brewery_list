<template>
  <div>
    <brewery-button></brewery-button>
    <brewery-list></brewery-list>
  </div>
</template>

<script>
import BreweryButton from "./BreweryButton.vue";
import BreweryList from "./BreweryList.vue";
export default {
  components: { BreweryList, BreweryButton },
  name: "home-content",
  computed: {
    drinks() {
      return this.$store.state["drinks"];
    },
  },
};
</script>

<style scoped>
</style>