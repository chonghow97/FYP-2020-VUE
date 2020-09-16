<template>
  <div id="menu">
    <!-- not login -->
    <v-list-item two-line :class="miniVariant && 'px-0'" @click.stop="dialog = true" v-if="!login">
      <v-list-item-avatar>
        <v-icon>{{ Default_Profile }}</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Sign in</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- is-login -->
    <v-list-item two-line :class="miniVariant && 'px-0'" @click.stop="dialog = true" v-else>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/men/82.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Alex Becker</v-list-item-title>
        <v-list-item-subtitle>Customer</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

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

    <!-- Register form -->
    <v-dialog v-model="dialog" max-width="500">
      <v-tabs>
        <v-tab>Sign In</v-tab>
        <v-tab :model="Tab">Register</v-tab>
        <v-tab-item :model="Tab">
          <Signin></Signin>
        </v-tab-item>
        <v-tab-item :model="Tab">
          <Register v-on:login="Login"></Register>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </div>
</template>



<script>
import Register from "@/components/Register.vue";
import Signin from "@/components/Signin.vue";
export default {
  components: { Register, Signin },
  data: () => ({
    login: false,
    dialog: false,
    Default_Profile: "mdi-account-circle",
  }),
  props: { items: { title: String, icon: String, link: String } },
  methods: {
    Login: function (a) {
      this.login = a;
    },
  },
};
</script>

<style></style>
