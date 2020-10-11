<template>
  <div id="home">
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="320px"
      max-width="100%"
      src="https://picsum.photos/id/11/500/300"
      transition="fade-transition"
    ></v-img>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <!-- Reservation form -->

          <v-card
            max-width="100%"
            tile
            elevation="10"
            class="mx-auto"
            color="teal lighten-5"
          >
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
                  :rules="[(v) => !!v || 'Item is required']"
                  label="Choose HomeStay"
                  required
                ></v-select>

                <v-btn color="blue lighten-4" class="mr-4" @click="validate"
                  >Order</v-btn
                >
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