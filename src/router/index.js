import Vue from "vue";
import VueRouter from "vue-router";
/*jshint -W024 */
const BaseView = () => import("@/views/BaseView");
/*jshint -W024 */
const MainContent = () => import("@/components/MainContent");
/*jshint -W024 */
const NotDonePage = () => import("@/components/NotDonePage");
/*jshint -W024 */
const DonePage = () => import("@/components/DonePage");
/*jshint -W024 */
const TrashCan = () => import("@/components/TrashCan");
/*jshint -W024 */
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
