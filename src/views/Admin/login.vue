<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main class="pink lighten-4">
      <!-- Provides the application the proper gutter -->

      <v-container fluid>
        <v-icon class="d-flex justify-center" size="200" color="brown darken-1"
          >mdi-account</v-icon
        >
        <h3 class="d-flex justify-center pb-3">Ipoh Homestay</h3>
        <v-card max-width="400" class="mx-auto">
          <v-card-title class="red lighten-5"> Login </v-card-title>
          <v-card-text class="pa-6">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="password"
                color="red"
                label="Password"
                type="password"
                required
              ></v-text-field> </v-form
          ></v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn
              :disabled="!valid"
              class="mr-4 mx-auto"
              @click="login(password)"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import store from "../../store";
export default {
  data() {
    return {
      valid: "",
      password: "",
    };
  },
  methods: {
    async login(password) {
      await store.dispatch("adminLogin", password);
    },
  },
};
</script>

<style scoped>
</style>
