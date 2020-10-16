import Axios from "axios";

const state = {
  menus: [
    { title: "Home", icon: "mdi-home", link: "/" },
    { title: "About", icon: "mdi-help-box", link: "/About" },
    { title: "Gallery", icon: "mdi-image", link: "/Gallery" },
  ],
  registerForm: {},
};
const getters = { allMenus: (state) => state.menus, registerForm:(state)=> state.registerForm };
const actions = {
  async userLogin(getters,payload){
    const request = await Axios.post("http://localhost:3000/users/login",payload);
    console.log(request.data);
  },

  async UserRegiser(getters,payload){
    this.$refs.registerForm.validate();
    try {
      const request = await Axios.post("http://localhost:3000/users/register",payload);
      alert(request.data);
    } catch (error) {
      alert("invalid form format");
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
