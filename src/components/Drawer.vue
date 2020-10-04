<template>
  <section id="menu">
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

    <MenuList :items="items"></MenuList>

    <!-- Register form -->
    <v-dialog v-model="dialog" max-width="500">
      <v-tabs>
        <v-tab>Sign In</v-tab>
        <v-tab :model="Tab">Register</v-tab>
        <v-tab-item :model="Tab">
          <Signin @login="Login"></Signin>
        </v-tab-item>
        <v-tab-item :model="Tab">
          <Register></Register>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </section>
</template>



<script>
import Register from "@/components/Register.vue";
import Signin from "@/components/Signin.vue";
import MenuList from "@/components/MenuList.vue";
export default {
  components: { Register, Signin, MenuList },
  data: () => ({
    dialog: false,
    Default_Profile: "mdi-account-circle",
  }),
  props: {
    items: { title: String, icon: String, link: String },
    login: Boolean,
  },
  methods: {
    Login: function (a) {
      this.login = a;
      this.$emit("login", a);
    },
  },
};
</script>

<style></style>
