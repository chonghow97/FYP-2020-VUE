<template>
  <div id="add">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="homestay.name"
        :counter="30"
        :rules="[(v) => !!v || 'Homestay is required']"
        label="Homestay Name"
        required
        color="pink"
      ></v-text-field>

      <v-slider
        v-model="homestay.select"
        label="Capacity"
        max="10"
        min="1"
        thumb-label
        ticks
        color="pink"
      ></v-slider>
      <v-row>
        <v-col>
          <v-textarea
            filled
            name="input-7-4"
            label="Description"
            color="pink"
            class="pink lighten-5"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-file-input
            v-model="homestay.image"
            small-chips
            truncate-length="15"
            prepend-icon="mdi-camera"
            color="pink"
          ></v-file-input>
          <v-color-picker
            hide-canvas
            hide-mode-switch
            type="rgb"
            canvas-height="10"
            elevation="1"
            hide-inputs
          ></v-color-picker>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddHomestay",
  data() {
    return {
      dialog: true,
      Capacity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      valid: "",
      name: "Example Lim",
      type: "hex",
      description: "Testing 123",
    };
  },
  computed: {
    ...mapGetters({ homestay: "newHomestay" }),
    color: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      },
    },
  },
};
</script>

<style>
</style> 