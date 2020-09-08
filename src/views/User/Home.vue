<template>
  <div id="home">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style>
</style>