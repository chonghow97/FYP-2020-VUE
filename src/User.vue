<template>
  <div id="user">
    <!-- App.vue -->
    <v-app>
      <v-navigation-drawer app v-model="drawer" color="cyan lighten-2">
        <!-- -->
        <Drawer :items="allMenus"></Drawer>
        <template v-slot:append>
          <div class="blue lighten-5" v-if="isLogin">
            <v-row dense no-gutters>
              <v-col cols="3"
                ><v-btn depressed exact tile dense bottom icon color="black">
                  <v-icon> mdi-cog-outline </v-icon>
                </v-btn></v-col
              >
              <v-spacer></v-spacer>
              <v-col cols="8"
                ><v-btn block @click="Logout"> Logout </v-btn></v-col
              >
            </v-row>
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
import VueCookies from "vue-cookies";
import store from "./store";
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
    Logout: function () {
      store.state.Users.menuLogin.forEach((element) => {
        store.state.Users.menus.pop(element);
      });
      //destroy cookies
      VueCookies.remove("Userdata");
      store.state.Users.isLogin = false;
      window.location.href = "/";
    },
  },

  computed: {
    ...mapGetters(["allMenus"]),
    isLogin: () => store.state.Users.isLogin,
  },
  created() {
    this.setHomestays();
    if (VueCookies.get("Userdata")) {
      const Userdata = VueCookies.get("Userdata");
      store.state.Users.user = Userdata;
      store.state.Users.isLogin = true;
      store.state.Users.menuLogin.forEach((element) => {
        store.state.Users.menus.push(element);
      });
    }
  },
};
</script>

<style scoope>
</style>
