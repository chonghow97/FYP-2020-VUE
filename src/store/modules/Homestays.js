// import axios from "axios";
const state = {
  Homestay: {
    name: "Example Lim",
    capacity: 2,
    description: "Testing 123",
  },
};
const actions = {
  getDummy() {
    const payload = state.Homestay;
    console.log(payload);
  },
};
const mutations = {};
const getters = { Homestay: (state) => state.Homestay };

export default {
  state,
  actions,
  mutations,
  getters,
};
