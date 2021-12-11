<template>
  <div>
    <button @click="get_drinks">Get Stuff</button>
  </div>
</template>

<script>
export default {
  name: "brewery-button",
  methods: {
    get_drinks() {
      this.$store.dispatch("get_drinks");
    },
  },
};
</script>

<style scoped>
</style>