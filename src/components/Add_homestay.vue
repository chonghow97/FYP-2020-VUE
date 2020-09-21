<template>
  <div id="add">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  method: {},
};
</script>

<style>
</style>