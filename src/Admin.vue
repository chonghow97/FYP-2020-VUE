<template>
  <div id="user">
    <!-- App.vue -->

    <v-app>
      <v-navigation-drawer app v-model="drawer" class="pink lighten-4" dark>
        <!-- -->
        <AdminDrawer :items="allAdminMenus"></AdminDrawer>
        <template v-slot:append>
          <div>
            <v-spacer></v-spacer>
            <v-btn block class="red lighten-1 white--text">Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-app-bar app class="pink lighten-3 white--text">
        <!-- -->
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="white--text"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-light">Ipoh</span>
          <span>Homestay</span>
        </v-toolbar-title>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main class="pink lighten-5">
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import AdminDrawer from "@/components/AdminDrawer.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: { AdminDrawer },
  data() {
    return {
      right: null,
      dialog: false,
      drawer: true,
    };
  },
  computed: { ...mapGetters(["allAdminMenus"]) },
};
</script>

<style></style>
