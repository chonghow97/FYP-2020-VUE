import axios from "axios";
const state = {
  success: false,
  Homestay: {
    name: "Homestay Example",
    capacity: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum. Amet mattis vulputate enim nulla aliquet. Ac tincidunt vitae semper quis lectus nulla. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat orci nulla pellentesque dignissim. Id faucibus nisl tincidunt eget. Condimentum id venenatis a condimentum vitae sapien. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Nunc sed blandit libero volutpat. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Mollis nunc sed id semper risus. Vulputate mi sit amet mauris commodo quis. Vel turpis nunc eget lorem dolor sed. Enim tortor at auctor urna nunc id cursus metus aliquam.",
    image: null,
    isActive: true,
    color: "#FF00FF",
    price: 12,
  },

  Homestays: [],
  HomestaysSelect: [],
  dialog: false,
};
const actions = {
  async setHomestays({ state }) {
    const request = await axios.get("http://localhost:3000/homestays");
    state.Homestays = request.data;
    request.data.forEach(element => {  
      state.HomestaysSelect.push({text: element.name+ " - RM " + element.price, value: element._id, price: element.price})
    });
  },

  setDialog({ state }, boolean) {
    state.AddHomestayDialog = boolean;
  },
  async setUser({ state, commit }) {
    state.success = false;
    const formData = new FormData();
    for (var key in state.Homestay) {
      formData.append(key, state.Homestay[key]);
    }

    const request = await axios.post(
      "http://localhost:3000/homestays",
      formData
    );
    // state.Homestay = {color: "#FF00FF",capacity: 5,};
    state.success = true;
    commit("updateHomestay", request.data);
  },

  async updateHomestay({state},payload) {
    state.success = false;
    const request = await axios.get("http://localhost:3000/homestays/"+payload);
    state.Homestay = request.data;
    console.log(getters);
  },

  async deleteHomestay({commit},payload){
    if(confirm("Are you sure you want to delete "+payload.name+" ?")){
      await axios.delete(`http://localhost:3000/homestays/${payload._id}`);
      commit("deleteHomestay",payload._id);
    }
  }
};
const mutations = {
  updateHomestay: (state, homestay) => state.Homestays.unshift(homestay),
  deleteHomestay: (state, id) => (state.Homestays = state.Homestays.filter(homestay => homestay._id !== id)),
};
const getters = {
  reservedHomestay: (state) => state.HomestaysSelect,
  newHomestay: (state) => state.Homestay,
  getShow: (state) => state.show,
  getSuccess: (state) => state.success,
  AllHomestay: (state) => state.Homestays,
  Dialog: (state) => state.dialog,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
