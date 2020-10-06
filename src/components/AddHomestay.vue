<template>
  <div id="add">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="Homestay.name"
        :counter="30"
        :rules="[(v) => !!v || 'Homestay is required']"
        label="Homestay Name"
        required
      ></v-text-field>

      <v-select
        v-model="Homestay.capacity"
        :items="Capacity"
        :rules="[(v) => !!v || 'Capacity is required']"
        label="Capacity"
        required
      ></v-select>
      <v-textarea
        v-model="Homestay.description"
        label="Description"
        counter
        full-width
        single-line
      ></v-textarea>
      <v-btn color="success" class="mr-4" @click="getDummy()">Add</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddHomestay",
  data() {
    return {
      dialog: true,
      Capacity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      select: "1",
      name: "",
      description: "",
      valid: "",
    };
  },
  methods: { ...mapActions(["getDummy"]) },
  computed: {
    ...mapGetters(["Homestay"]),
  },
};
</script>

<style>
</style>