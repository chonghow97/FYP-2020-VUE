import Vue from "vue";
import VueRouter from "vue-router";
import User from "@/User.vue";
import Admin from "../views/Admin/Home.vue";
import Home from "@/views/User/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: User,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
