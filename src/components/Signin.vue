<template>
  <v-card>
    <v-card-text>
      <v-form ref="signIn" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="email"
                label="Email"
                required
                :rules="emailRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label=" Password"
                hint="At least 8 characters"
                :rules="passwordRules"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="text-right">
            <a class="text-decoration-none" @click="forgetPassword"
              >Forget Password?</a
            >
          </div>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        :disabled="!valid"
        text
        @click="userLogin(UserAccount)"
        >Sign In</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      valid: false,
      show1: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Name must be more than 8 characters",
      ],
    };
  },
  methods: {
    forgetPassword: function () {
      let email = prompt("Please Insert your email", "timCook@apple.com");
      if (email) {
        store.dispatch("forgetPassword", email);
      }
    },
  },
  props: ["userLogin"],
  computed: {
    UserAccount() {
      return { email: this.email, password: this.password };
    },
  },
};
</script>

<style>
</style>