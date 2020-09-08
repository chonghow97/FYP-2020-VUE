<template>
  <div id="home"></div>
</template>

<script>
export default {
  name: "home",
  mounted: function () {
    const baseURI =
      "https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json";
    this.$http.get(baseURI).then((x) => {
      console.log(x.data);
    });
  },
};
</script>

<style>
</style>