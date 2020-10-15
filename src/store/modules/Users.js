import Axios from "axios";

const state = {
  menus: [
    { title: "Home", icon: "mdi-home", link: "/" },
    { title: "About", icon: "mdi-help-box", link: "/About" },
    { title: "Gallery", icon: "mdi-image", link: "/Gallery" },
  ],
};
const getters = { allMenus: (state) => state.menus };
const actions = {
  async userLogin(getters,payload){
    const request = await Axios.post("http://localhost:3000/users/login",payload);
    console.log(request.data);
  },

  async UserRegiser(getters,payload){
    try {
      const request = await Axios.post("http://localhost:3000/users/register",payload);
    console.log(request);
    } catch (error) {
      alert(error.message);
    }
    }
    
   
  };
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
