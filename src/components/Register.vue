<template>
  <v-card>
    <v-card-text>
      <v-form ref="registerForm" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="30"
                label="First name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="30"
                label="Last name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passRules"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label=" Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-row>
            <v-col cols="12" md="3">
              <v-select
                label="Code"
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="9">
              <v-text-field
                label="mobile Number"
                v-model="number"
                :rules="numberRules"
                :counter="10"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn color="warning" text class="mr-4" @click="reset">Clear</v-btn>

      <v-spacer></v-spacer>
      <v-btn
        color="blue white--text"
        :disabled="!valid"
        @click="UserRegiser(newUser)"
        >Sign Up</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import store from "../store";
const data = {
  show1: false,
  password: "12345678",
  firstname: "Loh",
  lastname: "Kean Ming",
  number: "184213618",
  name: "",
  valid: "",
  nameRules: [
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 30) || "Name must be less than 10 characters",
  ],
  email: "keanming@gmail.com",
  emailRules: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
  select: "+60",
  items: ["+60"],
  numberRules: [
    (v) => !!v || "E-mail is required",
    (v) => (v && v.length >= 9) || "Name must be more than 9 characters",
  ],
  passRules: [
    (v) => !!v || "Password is required",
    (v) => (v && v.length >= 8) || "password must be more than 8 characters",
  ],
  checkbox: true,
};
export default {
  data() {
    return data;
  },
  computed: {
    newUser: function () {
      const user = {
        fName: this.firstname,
        lName: this.lastname,
        email: this.email,
        phone: this.select + this.number,
        password: this.password,
      };
      return user;
    },
  },

  methods: {
    UserRegiser(newUser) {
      if (this.$refs.registerForm.validate()) {
        store.dispatch("UserRegiser", newUser);
      }
    },
    reset() {
      console.log(this.$refs.registerForm.reset());
    },
  },
};
</script>

<style>
</style>