<template>
  <v-list dense nav>
    <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: { items: { title: String, icon: String, link: String } },
};
</script>

<style>
</style>