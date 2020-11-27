<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Check In</th>
            <th class="text-left">Check Out</th>
            <th class="text-left">actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Orders" :key="item.name">
            <td>{{ item.homestay.name }}</td>
            <td>{{ item.startDate.slice(0, 10) + " (9a.m.)" }}</td>
            <td>{{ item.endDate.slice(0, 10) + " (12p.m.)" }}</td>
            <td v-if="!item.isPaid">
              <!-- <v-btn color="success" outlined @click="pay(item._id)">Pay</v-btn> -->
              <v-btn
                color="success"
                outlined
                @click="pay($children[0], item._id)"
                >Pay</v-btn
              >
            </td>
            <td v-else>
              <v-btn disabled outlined>Paid</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <payment
      :dialog="paymentDialog"
      :id="this.homestayID"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
import store from "./../../store";
import payment from "../../components/payment.vue";
export default {
  components: { payment },
  data: () => {
    return {
      paymentDialog: false,
      homestayID: "",
    };
  },
  computed: {
    Orders() {
      return store.state.Reservation.Orders;
    },
  },
  methods: {
    pay(children, id) {
      this.paymentDialog = true;
      console.log(children);
      this.homestayID = id;
    },
    closeDialog(payload) {
      this.paymentDialog = payload;
    },
  },
  mounted: () => {
    store.dispatch("getReservation", store.state.Users.user._id);
    if (!store.state.Users.isLogin) window.location.href = "/";
    this.Orders = store.state.Reservation.Orders;
  },
  //fetch data from database
};
</script>
<style>
</style>