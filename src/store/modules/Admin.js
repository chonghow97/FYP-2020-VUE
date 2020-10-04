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
};
const actions = {};
const mutations = {};
const getters = { allAdminMenus: (state) => state.adminMenus };

export default {
  state,
  actions,
  mutations,
  getters,
};
