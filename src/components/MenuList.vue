<template>
  <v-list dense nav>
    <v-list-item-group mandatory color="indigo">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.link"
        class="cyan lighten-4 light"
        color="indigo white--text"
        mandatory
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="black--text">
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: { items: { title: String, icon: String, link: String } },
};
</script>

<style scoped>
.ello {
  color: white;
}
</style>