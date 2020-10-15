<template>
  <div id="homestay">
    <v-container>
      <v-btn
        color="pink"
        fab
        dark
        class="mb-5 float-right"
        @click.stop="Dialog = true"
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

      <!-- description, capacity, name -->
      <v-container v-if="homestays.length != 0">
        <v-card class="mx-auto mt-3" v-for="n in homestays" :key="n.id">
          <v-list-item class="yellow lighten-4">
            <v-list-item-content>
              <v-list-item-title>
                <v-row dense>
                  <v-col class="col-1">
                    <v-icon small :color="n.color"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                  </v-col>

                  <v-col class="col-1">
                    <v-icon small>mdi-account</v-icon>
                    {{ n.capacity }}
                  </v-col>
                  <v-col>
                    {{ n.name }}
                  </v-col>
                </v-row>
              </v-list-item-title>
            </v-list-item-content>
            <v-btn
              small
              class="yellow lighten-5 ml-3"
              @click="updateHomestay(n._id)"
              ><v-icon color="pink"> mdi-pencil </v-icon></v-btn
            >
            <v-btn
              small
              class="yellow lighten-5 ml-3"
              @click="deleteHomestay(n)"
              ><v-icon color="pink"> mdi-trash-can-outline </v-icon></v-btn
            >
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

    <!-- dialog -->
    <v-dialog v-model="Dialog" max-width="500">
      <AddHomestay></AddHomestay>
    </v-dialog>
  </div>
</template>



<script>
import AddHomestay from "@/components/AddHomestay";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { AddHomestay },
  data() {
    return {
      Dialog: false,
    };
  },
  computed: {
    ...mapGetters({ homestays: "AllHomestay" }),
  },
  methods: {
    ...mapActions(["setHomestays", "updateHomestay", "deleteHomestay"]),
  },
  mounted() {
    this.setHomestays();
  },
};
</script>

<style>
</style>