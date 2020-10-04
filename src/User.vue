<template>
  <div id="user">
    <!-- App.vue -->

    <v-app>
      <v-navigation-drawer app v-model="drawer">
        <!-- -->
        <Drawer :items="items" :login="login" @login="login1"></Drawer>
        <template v-slot:append v-if="login">
          <div>
            <v-spacer></v-spacer>
            <v-btn block @click="logout">Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-app-bar app class="teal lighten-4">
        <!-- -->
        <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-light">Ipoh</span>
          <span>Homestay</span>
        </v-toolbar-title>
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
import Drawer from "@/components/Drawer.vue";
export default {
  name: "App",

  components: { Drawer },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "About", icon: "mdi-help-box", link: "/About" },
        { title: "Gallery", icon: "mdi-image", link: "/Gallery" },
      ],
      right: null,
      dialog: true,
      drawer: true,
      login: false,
    };
  },
  methods: {
    login1: function (event) {
      this.login = event;
    },
    logout: function () {
      this.login = false;
    },
  },
  mounted: {},
};
</script>

<style></style>
