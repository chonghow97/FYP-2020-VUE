<template>
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
            <!-- form -->
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-row>
                  <v-col>
                    <!-- start date -->
                    <v-text-field
                      v-model="minMax[0]"
                      label="Start Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </v-col>

                  <v-col>
                    <!-- end date -->
                    <v-text-field
                      v-model="minMax[1]"
                      label="EndDate"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </template>
              <!-- date picker -->
              <v-date-picker
                v-model="date"
                no-title
                scrollable
                :min="new Date().toISOString().substr(0, 10)"
                range
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <!-- Homestay -->
        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Homestay is required']"
          label="Choose HomeStay"
          required
        ></v-select>
        <!-- Price -->
        <v-text-field
          :value="'RM ' + getDay"
          label="Price"
          class="cyan lighten-5 black--text"
          filled
          disabled
        ></v-text-field>
        <!-- check available -->
        <v-btn color="blue lighten-4" class="mr-4"> Check available </v-btn>
        <v-btn color="blue lighten-4" class="mr-4" @click="validate"
          >Order</v-btn
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      date: ["", ""],
      menu: false,
    };
  },
  mounted: {},
  computed: {
    minMax: function () {
      if (
        this.date.length === 2 &&
        Date.parse(this.date[0]) > Date.parse(this.date[1])
      ) {
        [this.date[0], this.date[1]] = [this.date[1], this.date[0]];
      }
      return this.date;
    },
    getDay: function () {
      if (
        this.date.length === 2 &&
        Date.parse(this.date[1]) > Date.parse(this.date[0])
      ) {
        const day = Date.parse(this.date[1]) - Date.parse(this.date[0]);
        return day / 86400000;
      } else {
        return "";
      }
    },
  },
  props: ["label"],
  methods: {},
};
</script>

<style>
</style>