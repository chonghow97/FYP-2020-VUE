<template>
  <div id="home">
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="320px"
      max-width="100%"
      src="https://picsum.photos/id/11/500/300"
      transition="fade-transition"
    ></v-img>
    <v-container v-if="isLogin">
      <v-row>
        <v-col cols="12" md="12">
          <!-- Reservation form -->
          <Reservation></Reservation>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Reservation from "@/components/Reservation.vue";
import store from "../../store";
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
  computed: { isLogin: () => store.state.Users.isLogin },
};
</script>

<style>
</style>