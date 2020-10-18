import axios from "axios";
const state = {
  success: false,
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

  async showHomestay({state},payload) {
    state.success = false;
    const request = await axios.get("http://localhost:3000/homestays/"+payload);
    state.Homestay = request.data;
  },

  updateHomestay({state},payload){
    alert(payload);
    console.log(state);
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
