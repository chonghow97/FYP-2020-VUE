<template>
  <div id="homestay">
    <v-container>
      <v-row justify="center">
        <v-btn color="primary" dark @click.stop="dialog = true"
          >Add Homestay</v-btn
        >
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-card-title class="headline">Add Homestay</v-card-title>

            <v-card-text>
              <AddHomestay></AddHomestay>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- description, capacity, name -->
      <v-container>
        <v-card class="mx-auto" width="500" v-for="n in 10" :key="n.id">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Single-line item</v-list-item-title>
            </v-list-item-content>
            <v-btn small>1</v-btn>
            <v-btn small>2</v-btn>
          </v-list-item>

          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>



<script>
import AddHomestay from "@/components/AddHomestay";
export default {
  components: { AddHomestay },
  data() {
    return {
      dialog: false,
    };
  },
  method: {
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