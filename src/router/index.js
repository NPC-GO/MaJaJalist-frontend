import Vue from "vue";
import VueRouter from "vue-router";
import BaseView from "@/views/BaseView";
import MainContent from "@/components/MainContent.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "baseview",
    component: BaseView,
    children: [
      {
        path: "/",
        component: MainContent
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
