<template>
  <div id="user">
    <!-- App.vue -->
    <v-app>
      <v-navigation-drawer app v-model="drawer" color="cyan lighten-2">
        <!-- -->
        <Drawer :items="allMenus" :login="login" @login="login1"></Drawer>
        <template v-slot:append v-if="login">
          <div>
            <v-spacer></v-spacer>
            <v-btn block @click="logout">Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-app-bar app color="blue" dark absolute>
        <!-- -->

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-light">Ipoh</span>
          <span>Homestay</span>
        </v-toolbar-title>
      </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-main class="blue lighten-5">
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
import Drawer from "@/components/Drawer.vue";
import { mapActions, mapGetters } from "vuex";
const data = {
  right: null,
  dialog: true,
  drawer: true,
  login: false,
};
export default {
  name: "App",
  components: { Drawer },
  data: () => data,
  methods: {
    ...mapActions(["setHomestays"]),
    login1: function (event) {
      this.login = event;
    },
    logout: function () {
      this.login = false;
    },
  },
  computed: { ...mapGetters(["allMenus"]) },
  mounted() {
    this.setHomestays();
  },
};
</script>

<style scoope>
</style>
