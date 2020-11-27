import Axios from "axios";

const state = {Orders: []};
const actions = {
  async valiationReservation({state},payload){
    try {
      await Axios.post("http://localhost:3000/reservation",payload);
      //will expend function in payment gateway
      // if(confirm("Reservation successfully, Would you like to pay now?")){
      //   alert("paid successfully");
      // }

      //alert successfull message
      alert("reserved successfully");
      console.log(state);
      //redirect to history page
      window.location.href = "./History";
    } catch (error) {
      alert("Please choose another date / homestay (current time has been reserved)!");
      console.log(error);
    }

  },
  //get user order data
   async getReservation({state},payload){
    const respond = await Axios.get("http://localhost:3000/reservation/"+payload);
    state.Orders = respond.data;
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
