import Axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
  user: {},
  menus: [
    { title: "Home", icon: "mdi-home", link: "/" },
    { title: "About", icon: "mdi-help-box", link: "/About" },
    { title: "Gallery", icon: "mdi-image", link: "/Gallery" },
  ],
  menuLogin: [{
        title: "Reserved History",
        icon: "mdi-history",
        link: "/History",
      }],
  registerForm: {},
  isLogin: false,
  dialog: false,
};
const getters = { allMenus: (state) => state.menus, registerForm:(state)=> state.registerForm };
const actions = {
  async forgetPassword({state},payload){
    try {
      const request = await Axios.post("http://localhost:3000/users/password",{email: payload});
      alert(request.data);
    } catch (error) {
      alert("email not found please try again");
    }
    state;
  },
  async userLogin({state},payload){
    const request = await Axios.post("http://localhost:3000/users/login",payload);
    if(request.data){
      state.menuLogin.forEach(element => {
      state.menus.push(element)
    });

    //add cookies
    VueCookies.set('Userdata' , request.data, "1h");
    state.isLogin = true;
    state.user = request.data;

    return true;
    }else {
        alert("Wrong password or account not found");
        return false;
      }
    
  },

  setDialog({state},payload){
    state.dialog = payload;
  },

  async UserRegiser(getters,payload){
    try {
      const request = await Axios.post("http://localhost:3000/users/register",payload);
      alert(request.data);
    } catch (error) {
      alert("invalid form format");
    }
    },
    
   
  };
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
