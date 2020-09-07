<template>
  <v-card>
    <v-card-title class="headline grey lighten-2">Register</v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
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

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>Mobile Number
          <v-row>
            <v-col cols="12" md="3">
              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="9">
              <v-text-field v-model="firstname" :rules="nameRules" :counter="10" required></v-text-field>
            </v-col>
          </v-row>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn color="warning" text class="mr-4" @click="reset">Clear</v-btn>

      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="validate">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["+60"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>