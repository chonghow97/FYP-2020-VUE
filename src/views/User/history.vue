<template>
  <div>Hello world</div>
</template>

<script>
import store from "../../store";
export default {
  beforeMount: () => {
    if (!store.state.Users.isLogin) window.location.href = "/";
  },
};
</script>
<style>
</style>