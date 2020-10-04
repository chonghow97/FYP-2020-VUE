<template>
  <div id="add">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="30"
        :rules="[(v) => !!v || 'Homestay is required']"
        label="Homestay Name"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="Capacity"
        :rules="[(v) => !!v || 'Capacity is required']"
        label="Capacity"
        required
      ></v-select>
      <v-textarea
        v-model="description"
        label="Description"
        counter
        full-width
        single-line
      ></v-textarea>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"
        >Add</v-btn
      >
    </v-form>
  </div>
</template>

<script>
const data = {
  dialog: true,
  Capacity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  select: "1",
  name: "",
  description: "",
};
export default {
  data: () => data,
  method: {},
  computed: {
    Homestay() {
      return {
        name: this.name,
        capacity: this.Capacity,
        description: this.description,
      };
    },
  },
};
</script>

<style>
</style>