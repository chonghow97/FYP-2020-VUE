<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search1"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="homestays"
        :search="search1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data: () => {
    return {
      search1: "",
      headers: [
        { text: "Check In", value: "startDate" },
        { text: "Check Out", value: "endDate" },
        {
          text: "Homestay",
          value: "homestay.name",
        },

        { text: "By", value: "userID.name" },
        { text: "Contact", value: "userID.contact" },
        { text: "Amount", value: "amount" },
      ],
      homestays: [],
      laji: "",
    };
  },
  async mounted() {
    const request = await Axios.get("http://localhost:3000/reservation");
    this.homestays = request.data;
  },
};
</script>
  
<style>
</style>