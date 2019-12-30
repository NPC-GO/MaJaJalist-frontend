/*jshint -W024 */
import Vue from "vue";
import VueRouter from "vue-router";
const BaseView = () => import("@/views/BaseView");
const MainContent = () => import("@/components/MainContent");
const NotDonePage = () => import("@/components/NotDonePage");
const DonePage = () => import("@/components/DonePage");
const TrashCan = () => import("@/components/TrashCan");
const Settings = () => import("@/components/Settings");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "baseview",
    component: BaseView,
    children: [
      {
        name: "maincontent",
        path: "/",
        component: MainContent
      },
      {
        name: "notdonepage",
        path: "/unfinished",
        component: NotDonePage
      },
      {
        name: "donepage",
        path: "/finished",
        component: DonePage
      },
      {
        name: "trashcan",
        path: "/trashcan",
        component: TrashCan
      },
      {
        name: "settings",
        path: "/settings",
        component: Settings
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/tmp")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
