import axios from "axios";
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
  admin: {
    name: "",
  },
  isLogin: true,
};
const actions = {
  async adminLogin(getters,payload){
    const request = await axios.post("http://localhost:3000/admin",{password: payload});
    console.log(request.data);
  }
};
const mutations = {};
const getters = { allAdminMenus: (state) => state.adminMenus};

export default {
  state,
  actions,
  mutations,
  getters,
};
