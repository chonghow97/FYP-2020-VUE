<template>
  <div id="detail">
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <h1>hello world i'm {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Gallery",
        disabled: false,
        href: "../Gallery",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
    ],
  }),
};
</script>

<style>
</style>