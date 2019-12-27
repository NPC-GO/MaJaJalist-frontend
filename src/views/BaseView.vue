<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <ToolBar @onDrawerClicked="onDrawerClicked"></ToolBar>
    <v-content>
      <router-view ref="child" />
      <bg />
    </v-content>
    <FloatButton @onClick="onAddButonClicked" />
    <EDialog />
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
    },
    onAddButonClicked() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "editorDialogStatus",
        data: true
      });
    }
  }
};
</script>
