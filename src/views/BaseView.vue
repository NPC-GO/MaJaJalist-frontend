<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <ToolBar @onDrawerClicked="onDrawerClicked"></ToolBar>
    <v-content>
      <router-view ref="child" />
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
import query from "@/apis/query";
const queryApi = query();
export default {
  name: "baseview",
  components: {
    NavDrawer,
    FloatButton,
    ToolBar,
    FooterCard
  },
  methods: {
    onDrawerClicked() {
      this.$refs.navdr.onDrawerClicked();
    }
  }
};
</script>
