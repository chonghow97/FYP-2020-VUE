
<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Payment</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Check Out</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <div ref="card" id="pay"></div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import Axios from "axios";

import AdyenCheckout from "@adyen/adyen-web";
import "@adyen/adyen-web/dist/adyen.css";
export default {
  data() {
    return {};
  },
  props: { dialog: Boolean, id: { String } },
  methods: {
    closeDialog: function () {
      this.$emit("closeDialog", false);
    },
    coolMethod: function () {
      alert("cslog");
    },
  },
  computed: {
    homestay: () => this.id,
  },
  async mounted() {
    const request = await Axios.get("http://localhost:3000/payment");
    var vm = this;
    async function handleOnSubmit(state, component) {
      state.isValid; // True or false. Specifies if all the information that the shopper provided is valid.
      state.data; // Provides the data that you need to pass in the `/payments` call.
      component; // Provides the active component instance that called this event.

      const request = await Axios.put("http://localhost:3000/payment", {
        data: state.data,
        homestay: vm.id,
      });
      checkout.createFromAction(request.data.action).mount("#pay");
    }
    const configuration = {
      showPaymentMethods: true,
      showStoredPaymentMethods: true,
      amount: {
        value: 1,
        currency: "MYR",
      },
      onSubmit: handleOnSubmit,
      paymentMethodsResponse: request.data,
      clientKey: "test_NGJ2C4SERREHNI4ZG44AQ3WVAQ3QK2OP",
      locale: "en_US",
      environment: "test",
    };

    const checkout = new AdyenCheckout(configuration);
    // console.log(checkout.create("card"));
    if (this.dialog) {
      // console.log("asd");
      checkout
        .create("dropin", {
          onSubmit: handleOnSubmit,
          amount: { value: 1, currency: "MYR" },
          installmentOptions: {},
          paymentMethodsConfiguration: {},
          openFirstPaymentMethod: true,
          openFirstStoredPaymentMethod: true,
          showStoredPaymentMethods: true,
          showPaymentMethods: true,
          showRemoveStoredPaymentMethodButton: true,
          showPayButton: true,
        })
        .mount(this.$refs.card);
    }
  },
};
</script>

<style>
</style>
