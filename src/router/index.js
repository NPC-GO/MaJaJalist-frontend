import Vue from "vue";
import VueRouter from "vue-router";
import BaseView from "@/views/BaseView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "baseview",
    component: BaseView,
    children: [
      {
        path: "/",
        component: () => import("@/components/MainContent.vue")
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/NavigationDrawer.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
