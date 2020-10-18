<template>
  <v-card>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="Email"
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
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" :disabled="!valid" text @click="userLogin"
        >Sign In</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      show1: false,
      Email: "keanming@gmail.com",
      password: "12345678",
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
  props: ["userLogin"],
  computed: {
    UserAccount: function () {
      const User = {
        Email: this.Email,
        Password: this.password,
      };
      return User;
    },
  },
};
</script>

<style>
</style>