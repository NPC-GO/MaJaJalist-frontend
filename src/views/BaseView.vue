<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <ToolBar @onDrawerClicked="onDrawerClicked"></ToolBar>
    <v-content>
      <router-view ref="child" />
      <bg />
    </v-content>
    <FloatButton />
    <FooterCard />
  </v-app>
</template>
<script>
import NavDrawer from "@/components/NavigationDrawer";
import FloatButton from "@/components/FloatButton";
import ToolBar from "@/components/ToolBar";
import FooterCard from "@/components/FooterCard";
import bg from "@/components/MainContentBackground";
export default {
  name: "baseview",
  components: {
    NavDrawer,
    FloatButton,
    ToolBar,
    FooterCard,
    bg
  },
  methods: {
    onDrawerClicked() {
      this.$refs.navdr.onDrawerClicked();
    }
  }
};
</script>
