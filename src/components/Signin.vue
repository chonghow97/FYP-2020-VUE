<template>
  <v-card>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field v-model="firstname" label="First name" required></v-text-field>
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
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-checkbox v-model="checkbox" label="Keep me logged in" required></v-checkbox>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="validate">Sign In</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    validate: function () {
      this.$emit("login", "true");
    },
  },
};
</script>

<style>
</style>