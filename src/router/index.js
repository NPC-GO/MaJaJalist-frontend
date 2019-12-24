import Vue from "vue";
import VueRouter from "vue-router";
import Base from "@/views/Base";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "base",
    component: Base,
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
