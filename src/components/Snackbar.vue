<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="show" timeout="-1">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="show1()"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      text: "this is a test",
    };
  },
  computed: { ...mapGetters({ show: "getShow" }) },
  methods: { ...mapActions({ show1: "setShow" }) },
};
</script>