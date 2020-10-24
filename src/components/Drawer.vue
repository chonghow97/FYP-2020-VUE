<template>
  <section id="menu">
    <!-- not login -->
    <v-list-item two-line @click.stop="dialog = true" v-if="!isLogin">
      <v-list-item-avatar>
        <v-icon>{{ Default_Profile }}</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Sign in</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- is-login -->
    <v-list-item two-line v-else>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/men/82.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="white--text">{{ name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <MenuList :items="items"></MenuList>

    <!-- Register form -->
    <v-dialog v-model="dialog" max-width="500">
      <v-tabs>
        <v-tab>Sign In</v-tab>
        <v-tab>Register</v-tab>
        <v-tab-item>
          <Signin :userLogin="Login" @update="dialog"></Signin>
        </v-tab-item>
        <v-tab-item>
          <Register :RegisterAction="Login"></Register>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </section>
</template>



<script>
import Register from "@/components/Register.vue";
import Signin from "@/components/Signin.vue";
import MenuList from "@/components/MenuList.vue";
import store from "../store";
const data = {
  dialog: false,
  Default_Profile: "mdi-account-circle",
};
export default {
  components: { Register, Signin, MenuList },
  data: () => data,
  computed: {
    isLogin: () => store.state.Users.isLogin,
    name: () =>
      `${store.state.Users.user.lName} ${store.state.Users.user.fName}`,
  },
  props: {
    items: { title: String, icon: String, link: String },
  },
  methods: {
    Login: async function (payload) {
      if (await store.dispatch("userLogin", payload)) {
        this.dialog = false;
      }
    },
  },
};
</script>

<style></style>
