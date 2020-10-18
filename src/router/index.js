import Vue from "vue";
import VueRouter from "vue-router";
import User from "@/User.vue";
import Admin from "../Admin.vue";
import Home from "@/views/User/Home.vue";
import About from "@/views/User/About.vue";
import Gallery from "@/views/User/Gallery.vue";
import Calendar from "@/views/Admin/Calendar.vue";
import Dashboard from "@/views/Admin/Dashboard.vue";
import Homestay from "@/views/Admin/Homestay.vue";
import galleryDetail from "@/views/User/galleryDetail.vue";
import Login from "@/views/Admin/login.vue";
import History from "@/views/User/history.vue"

Vue.use(VueRouter);

const routes = [
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
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
        path: "/gallery/:id",
        component: galleryDetail,
      },
      {
        path: "/history",
        name: "history",
        component: History,
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        name: "Dashboard",
        path: "/Dashboard",
        component: Dashboard,
      },
      {
        name: "Calendar",
        path: "/Calendar",
        component: Calendar,
      },
      {
        name: "Homestay",
        path: "/Homestay",
        component: Homestay,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
