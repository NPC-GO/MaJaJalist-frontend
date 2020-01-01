import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Vue.mixin({
//   mounted() {
//     this.$store.dispatch("setPageDynamicConfig", {
//       name: "currentPage",
//       data: this.$router.currentRoute.name
//     });
//     this.$store.dispatch("setPageDynamicConfig", {
//       name: "selectedItemInCurrentPage",
//       data: []
//     });
//     this.$store.dispatch("setPageDynamicConfig", {
//       name: "selectionMode",
//       data: false
//     });
//   }
// });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
