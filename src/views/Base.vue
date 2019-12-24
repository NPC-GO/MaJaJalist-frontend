<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <ToolBar @onDrawerClicked="onDrawerClicked"></ToolBar>
    <v-content>
      <router-view ref="child" />
    </v-content>
    <FloatButton />
    <Footer />
  </v-app>
</template>

<script>
import NavDrawer from "@/components/NavigationDrawer";
import FloatButton from "@/components/FloatButton";
import ToolBar from "@/components/ToolBar";
import Footer from "@/components/Footer";
export default {
  name: "base",
  components: {
    NavDrawer,
    FloatButton,
    ToolBar,
    Footer
  },
  methods: {
    onDrawerClicked() {
      this.$refs.navdr.onDrawerClicked();
    }
  }
};
</script>
