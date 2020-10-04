import Vue from "vue";
import Vuex from "vuex";
import Users from "./modules/Users";
import Admin from "./modules/Admin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Users, Admin },
});
