<template>
  <div id="app">
    <!-- App.vue -->

    <v-app>
      <v-navigation-drawer app>
        <!-- -->
        <Menu></Menu>
      </v-navigation-drawer>

      <v-app-bar app color="blue light-8" dark>
        <!-- -->
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Ipoh HomeStay</v-toolbar-title>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
};
</script>

<style></style>
