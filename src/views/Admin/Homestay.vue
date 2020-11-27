<template>
  <div id="homestay">
    <v-container>
      <v-btn color="pink" fab dark class="mb-5 float-right" @click.stop="add">
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
      <!-- search bar -->
      <v-text-field v-model="search">
        <v-icon slot="prepend" color="green"> mdi-magnify </v-icon>
      </v-text-field>
      <!-- description, capacity, name -->
      <v-container v-if="homestays.length != 0">
        <v-card class="mx-auto mt-3" v-for="n in filteredHomestay" :key="n.id">
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
            <v-btn small class="yellow lighten-5 ml-3" @click="update(n._id)"
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
      <AddHomestay
        :title="HomestayForm.title"
        :SubmitButtonName="HomestayForm.name"
        :SubmitButtonAction="HomestayForm.action"
        :Homestay="homestay"
      ></AddHomestay>
    </v-dialog>
  </div>
</template>



<script>
import AddHomestay from "@/components/AddHomestay";
import { mapActions, mapGetters } from "vuex";
import store from "../../store/";
export default {
  components: { AddHomestay },
  data() {
    return {
      search: "",
      HomestayForm: { title: "", name: "", action: this.add },
      Dialog: false,
      id: "",
      homestay: {
        name: "good",
        price: "12",
        capacity: "34",
        description: "5000",
        color: "#FF00FF",
        image: null,
        isActive: true,
      },
    };
  },
  computed: {
    ...mapGetters({ homestays: "AllHomestay" }),
    filteredHomestay: function () {
      return this.homestays.filter((homestay) => {
        return homestay.name.match(this.search);
      });
    },
  },
  methods: {
    ...mapActions(["deleteHomestay"]),
    add() {
      this.HomestayForm = {
        title: "Create Homestay",
        name: "Create",
        action: this.setHomestays,
      };
      this.Dialog = true;
    },
    update(payload) {
      this.HomestayForm = {
        title: "Update Homestay",
        name: "Update",
        action: this.updateHomestay,
      };
      const user = this.homestays.filter((home) => home._id === payload)[0];
      this.homestay = user;
      this.id = user._id;
      this.Dialog = true;
    },
    setHomestays() {
      store.dispatch("setUser", this.homestay);
    },
    updateHomestay() {
      console.log(this.id);
      store.dispatch("updateHomestay", {
        homestay: this.homestay,
      });
      this.Dialog = false;
    },
  },
  mounted() {
    store.dispatch("setHomestays");
  },
};
</script>

<style>
</style>