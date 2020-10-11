<template>
  <div id="homestay">
    <v-container>
      <v-btn
        color="pink"
        fab
        dark
        class="mb-5 float-right"
        @click.stop="dialog = true"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            HomeStay Management
          </v-list-item-title>
          <v-list-item-subtitle>Manage your homestay</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-list-item class="pink" dark>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  Register
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-text class="mt-3">
              <AddHomestay></AddHomestay>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="pink" text @click="user()"> Add </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- description, capacity, name -->
      <v-container v-if="homestay">
        <v-card
          class="mx-auto mt-3"
          width="500"
          v-for="n in testing"
          :key="n.id"
        >
          <v-list-item class="light-blue lighten-4">
            <v-list-item-content class="lighten-3--text">
              <v-list-item-title class="grey-darken-1--text">
                {{ n.id }} {{ n.name }}</v-list-item-title
              >
            </v-list-item-content>
            <v-btn small class="cyan lighten-5 ml-3">1</v-btn>
            <v-btn small class="cyan lighten-5 ml-3">1</v-btn>
          </v-list-item>

          <v-divider></v-divider>
        </v-card>
      </v-container>
      <v-container v-else>
        <v-banner class="text-center" elevation="4" dark color="pink"
          >Nothing to show</v-banner
        ></v-container
      >
    </v-container>
  </div>
</template>



<script>
import AddHomestay from "@/components/AddHomestay";
import { mapActions } from "vuex";
export default {
  components: { AddHomestay },
  data() {
    return {
      dialog: false,
      testing: [
        { id: 1, name: "item1" },
        { id: 2, name: "item2" },
        { id: 3, name: "item3" },
      ],
    };
  },
  methods: {
    ...mapActions({ user: "setUser" }),
    test: function () {
      console.log("working");
    },
    dialog1: function (a) {
      this.dialog = a;
    },
  },
};
</script>

<style>
</style>