<template>
  <div id="homestay">
    <v-container>
      <v-row justify="center">
        <v-btn color="primary" dark @click.stop="dialog = true">Add Homestay</v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Add Homestay</v-card-title>

            <v-card-text>
              <Add_homestay></Add_homestay>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="primary darken-1" text @click="dialog = false">close</v-btn>
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
import Add_homestay from "@/components/Add_homestay";
export default {
  components: { Add_homestay },
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