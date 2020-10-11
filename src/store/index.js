import Vue from "vue";
import Vuex from "vuex";
import Users from "./modules/Users";
import Admin from "./modules/Admin";
import Homestays from "./modules/Homestays";
import Toast from "./modules/Toast";
import Reservation from "./modules/Reservation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Users, Admin, Homestays, Toast, Reservation },
});
