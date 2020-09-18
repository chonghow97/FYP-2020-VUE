<template>
  <div id="home">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" md="6">
          <!-- Carousel -->
          <v-carousel hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <!-- Reservation form -->

          <v-card max-width="500" tile elevation="10" class="mx-auto">
            <v-card-title>Reservation</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" md="12">
                    <Reservation label="Reservation Date"></Reservation>
                  </v-col>
                </v-row>
                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="Choose HomeStay"
                  required
                ></v-select>

                <v-btn color="success" class="mr-4" @click="validate">Validate</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Reservation from "@/components/Reservation.vue";
export default {
  name: "home",
  components: { Reservation },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      message: "",
    };
  },
};
</script>

<style>
</style>