const state = {
  menus: [
    { title: "Home", icon: "mdi-home", link: "/" },
    { title: "About", icon: "mdi-help-box", link: "/About" },
    { title: "Gallery", icon: "mdi-image", link: "/Gallery" },
  ],
};
const getters = { allMenus: (state) => state.menus };
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
