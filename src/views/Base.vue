<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <v-app-bar app clipped-left color="purple darken-3" dark>
      <v-app-bar-nav-icon @click.stop="onDrawerClicked" />

      <v-toolbar-title>
        <b>MaJaJaList</b>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view ref="child" />
    </v-content>

    <v-dialog v-model="config.inputAreaDialogStatus" width="600">
      <inputArea key="inputAreaKey" />
    </v-dialog>
    <v-footer app color="purple darken-3">
      <span class="white--text">Copyright &copy; NPC GO Dev Team</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from "@/components/NavigationDrawer";
export default {
  name: "base",
  components: {
    NavDrawer
  },
  data: () => ({
    fling: false,
    tabs: null,
    inputAreaKey: -1,
    currentStatus: "getCurrentStatus",
    user: "getUser",
    unfinLength: "getUnfinLength",
    finLength: "getFinLength",
    traLength: "getTraLength",
    config: "getComponentConfig"
  }),
  methods: {
    onDrawerClicked() {
      this.$refs.navdr.onDrawerClicked();
    }
  }
};
</script>
