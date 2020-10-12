import axios from "axios";
const state = {
  success: false,
  Homestay: {
    name: "Homestay Example",
    capacity: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum. Amet mattis vulputate enim nulla aliquet. Ac tincidunt vitae semper quis lectus nulla. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Placerat orci nulla pellentesque dignissim. Id faucibus nisl tincidunt eget. Condimentum id venenatis a condimentum vitae sapien. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Nunc sed blandit libero volutpat. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Mollis nunc sed id semper risus. Vulputate mi sit amet mauris commodo quis. Vel turpis nunc eget lorem dolor sed. Enim tortor at auctor urna nunc id cursus metus aliquam.",
    image: null,
    isActive: true,
    color: "#FF00FF",
    price: 12,
  },

  Homestays:null,

};
const actions = {
   async setHomestays(){
    const request = await axios.get("http://localhost:3000/homestays");
    request.data !== null ? alert("fine"):
    
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
    console.log(request);
    // state.Homestay = {color: "#FF00FF",capacity: 5,};
    state.success = true;
    commit("updateHomestay", request.data);
  },
};
const mutations = {
  updateHomestay: (state,homestay) => state.Homestays.unshift(homestay),
};
const getters = {
  newHomestay: (state) => state.Homestay,
  getShow: (state) => state.show,
  getSuccess: (state)=>state.success,
  AllHomestay: (state)=>state.Homestays,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
