<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <ToolBar
      ref="toptoolbar"
      @clearSelection="clearSelection"
      @onDrawerClicked="onDrawerClicked"
    ></ToolBar>
    <v-content transition="scroll-y-transition">
      <router-view @itemsPageInit="itemsPageInit" ref="child" />
      <bg />
    </v-content>
    <FloatButton @onClick="onAddButonClicked" />
    <EDialog :key="pageDConfig.editorDialogKey" />
    <FooterCard />
  </v-app>
</template>
<script>
const NavDrawer = () => import("@/components/NavigationDrawer");
const FloatButton = () => import("@/components/FloatButton");
const ToolBar = () => import("@/components/ToolBar");
const FooterCard = () => import("@/components/FooterCard");
const bg = () => import("@/components/MainContentBackground");
const EDialog = () => import("@/components/EditorDialog");
import { mapGetters } from "vuex";
export default {
  name: "baseview",
  components: {
    NavDrawer,
    FloatButton,
    ToolBar,
    FooterCard,
    bg,
    EDialog
  },
  methods: {
    onDrawerClicked() {
      this.$refs.navdr.onDrawerClicked();
      console.log("13213213");
    },
    onAddButonClicked() {
      this.pageDConfig.editorDialogKey++;
      this.$store.dispatch("setPageDynamicConfig", {
        name: "editorDialogStatus",
        data: true
      });
    },
    clearSelection() {
      this.$refs.child["inActiveItems"] = [];
    },
    itemsPageInit() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "currentPage",
        data: this.$router.currentRoute.name
      });
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectedItemInCurrentPage",
        data: []
      });
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectionMode",
        data: false
      });
      this.$refs.toptoolbar.clrSelection();
    }
  },
  computed: {
    ...mapGetters({ pageDConfig: "getPageDynamicConfig" })
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
