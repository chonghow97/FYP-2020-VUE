import Vue from "vue";
import VueRouter from "vue-router";
import User from "@/User.vue";
import Admin from "../views/Admin/Home.vue";
import Home from "@/views/User/Home.vue";
import About from "@/views/User/About.vue";
import Gallery from "@/views/User/Gallery.vue";
import Chat from "@/views/User/Chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: User,
    children: [
      {
        name: "home",
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
      },
      {
        path: "/chat",
        name: "chat",
        component: Chat,
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
