<template>
  <div id="add">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-alert
        dismissible
        :value="alert"
        transition="scroll-y-transition"
        type="success"
        elevation="2"
      >
        Added Successfully!
      </v-alert>
      <v-text-field
        v-model="homestay.name"
        :counter="30"
        :rules="[(v) => !!v || 'Homestay is required']"
        label="Homestay Name"
        required
        color="pink"
        class="mt-5"
      ></v-text-field>
      <v-textarea
        filled
        v-model="homestay.description"
        name="input-7-4"
        label="Description"
        :rules="[(v) => !!v || 'Description is required']"
        color="pink"
        class="pink lighten-5 mt-5 mb-5"
      ></v-textarea>
      <v-slider
        v-model="homestay.capacity"
        label="Capacity"
        max="10"
        min="1"
        thumb-label
        ticks
        class="mt-5"
        color="pink"
      ></v-slider>

      <v-row>
        <v-col class="md-col-12 lg-col-6">
          <v-color-picker
            v-model="homestay.color"
            hide-canvas
            hide-mode-switch
            type="rgb"
            canvas-height="10"
            elevation="1"
            hide-inputs
          ></v-color-picker>
        </v-col>
        <v-col class="md-col-12 lg-col-6">
          <v-file-input
            v-model="homestay.image"
            small-chips
            clearable
            truncate-length="15"
            prepend-icon="mdi-camera"
            color="pink"
          ></v-file-input>
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
    };
  },
  computed: {
    ...mapGetters({ homestay: "newHomestay" }),
    ...mapGetters({ alert: "getSuccess" }),
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