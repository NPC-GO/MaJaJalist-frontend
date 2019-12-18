<template>
  <v-app>
    <ToolBar />
    <NavigationDrawer />
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import NavigationDrawer from "@/components/NavigationDrawer";
export default {
  name: "mainpage",
  components: {
    ToolBar,
    NavigationDrawer
  }
};
</script>
