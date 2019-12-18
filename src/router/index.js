import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainpage",
    component: MainPage
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/NavigationDrawer")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
