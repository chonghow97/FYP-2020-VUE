import axios from "axios";
import VueCookies from 'vue-cookies'

const state = {
  adminMenus: [
    {
      title: "Dashboard",
      icon: "mdi-monitor-dashboard",
      link: "/Dashboard",
    },
    { title: "HomeStay", icon: "mdi-home-account", link: "/Homestay" },
    { title: "Calendar", icon: "mdi-calendar", link: "/Calendar" },
  ],
  admin: {},
  isLogin: false,
};
const actions = {
  async adminLogin({commit},payload){
    try {
      const response = await axios.post("http://localhost:3000/admin",{password: payload});
      VueCookies.set('AdminData' , response.data, "1h");
      await commit("login",response.data);
      window.location.href = "/Homestay";
    } catch (error) {
      alert("invalid password please try again");
    }
    
  },
};
const mutations = {
  login(state,data){
    state.isLogin = true;
    state.admin = data;
  }
};
const getters = { allAdminMenus: (state) => state.adminMenus};

export default {
  state,
  actions,
  mutations,
  getters,
};
