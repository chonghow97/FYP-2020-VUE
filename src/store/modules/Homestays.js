import axios from "axios";
const state = {
  show: false,
  Homestay: {
    name: "example Lim",
    select: 1,
    description: "testing123",
    image: null,
    isActive: true,
  },
};
const actions = {
  async setUser({ state, commit }) {
    console.log(state.Homestay);
    const formData = new FormData();
    for (var key in state.Homestay) {
      formData.append(key, state.Homestay[key]);
    }

    const request = await axios.post(
      "http://localhost:3000/homestays",
      formData
    );

    commit("toast", request.data);
  },
  setShow() {
    state.show = false;
  },
};
const mutations = {
  toast(a) {
    a.show = true;
  },
};
const getters = {
  newHomestay: (state) => state.Homestay,
  getShow: (state) => state.show,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
