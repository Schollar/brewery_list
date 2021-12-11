<template>
  <div>
    <section v-for="drink in drinks" :key="drink.id">
      <h1>{{ drink.name }}</h1>
      <h5>{{ drink.brewery_type }}</h5>
    </section>
  </div>
</template>

<script>
export default {
  name: "brewery-list",
  computed: {
    drinks() {
      return this.$store.state["drinks"];
    },
  },
};
</script>

<style lang="css" scoped>
section {
  display: grid;
  place-items: center;
  margin-top: 20px;
}
</style>