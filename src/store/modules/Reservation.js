import Axios from "axios";

const state = {};
const actions = {
  async valiationReservation({state},payload){
    const response = await Axios.post("http://localhost:3000/reservation",payload);
    console.log(state,response.data);

  }
};
const mutations = {};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
