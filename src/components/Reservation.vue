<template>
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
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      :min="new Date().toISOString().substr(0, 10)"
      range
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
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
  },
  props: ["label"],
  methods: {},
};
</script>

<style>
</style>