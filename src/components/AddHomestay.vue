<template>
  <div id="add">
    <v-card>
      <v-list-item class="pink" dark>
        <v-list-item-content>
          <v-list-item-title class="headline"> {{ title }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text class="mt-3">
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
            v-model="Homestay.name"
            :counter="30"
            :rules="[(v) => !!v || 'Homestay is required']"
            label="Homestay Name"
            required
            color="pink"
            class="mt-5"
          ></v-text-field>
          <v-text-field
            v-model="Homestay.price"
            label="Price"
            hide-details
            :rules="[(v) => !!v || 'Price is required']"
            type="number"
            prefix="RM"
          ></v-text-field>
          <v-textarea
            filled
            v-model="Homestay.description"
            name="input-7-4"
            label="Description"
            :rules="[(v) => !!v || 'Description is required']"
            color="pink"
            class="pink lighten-5 mt-5 mb-5"
          ></v-textarea>
          <v-slider
            v-model="Homestay.capacity"
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
                v-model="Homestay.color"
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
                v-model="Homestay.image"
                small-chips
                clearable
                truncate-length="15"
                prepend-icon="mdi-camera"
                :rules="[(v) => !!v || 'Photo is required']"
                color="pink"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="pink" text @click="SubmitButtonAction">
          {{ SubmitButtonName }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddHomestay",
  props: {
    title: String,
    SubmitButtonName: String,
    SubmitButtonAction: {
      type: Function,
    },
    Homestay: {
      name: String,
      price: String,
      capacity: Number,
      description: String,
      color: String,
      image: String,
    },
  },
  data() {
    return {
      valid: "",
    };
  },
  methods: {
    ...mapActions({ user: "setUser" }),
    ...mapActions(["updateHomestay"]),
    rubbish() {
      alert("sss");
    },
  },
  computed: {
    ...mapGetters({ alert: "getSuccess" }),
    ...mapGetters({ dialog: "Dialog" }),
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