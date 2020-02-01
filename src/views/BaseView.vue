<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <ToolBar
      @addItem="onAddButtonClicked"
      @clearSelection="clearSelection"
      @editItem="onEditButtonClicked"
      @onDrawerClicked="onDrawerClicked"
      ref="toptoolbar"
    />
    <v-content transition="scroll-y-transition">
      <router-view @itemsPageInit="itemsPageInit" ref="child" />
      <bg />
    </v-content>
    <FloatButton
      @onClick="onAddButtonClicked"
      v-show="floatButtonShowRealTime"
    />
    <EDialog :key="pageDConfig.editorDialogKey" />
    <MsgBox :key="pageDConfig.msgBoxKey" />
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
const MsgBox = () => import("@/components/MsgBox");
import { mapGetters } from "vuex";

export default {
  name: "baseview",
  components: {
    NavDrawer,
    FloatButton,
    ToolBar,
    FooterCard,
    bg,
    EDialog,
    MsgBox
  },
  methods: {
    onDrawerClicked() {
      this.$refs.navdr.onDrawerClicked();
    },
    onAddButtonClicked() {
      this.resetSelections();
      this.$store.dispatch("setEditorDialogConfig", {
        mode: true,
        text: "",
        checked: false
      });
      this.pageDConfig.editorDialogKey++;
      this.$store.dispatch("setPageDynamicConfig", {
        name: "editorDialogStatus",
        data: true
      });
    },
    onEditButtonClicked() {
      let itemIndex = this.selectedItemIndex[0];
      let item = this.items[itemIndex];
      this.$store.dispatch("setEditorDialogConfig", {
        mode: false,
        text: item.textContent,
        checked: item.status.completed,
        index: itemIndex
      });
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
      this.resetSelections();
    },
    resetSelections() {
      try {
        this.$refs.toptoolbar.clrSelection();
      } catch (e) {}
    },
    floatButtonShow() {
      let dontShow = ["trashcan"];
      let show = dontShow.findIndex(x => x === this.currentRoute);
      return show === -1;
    }
  },
  computed: {
    ...mapGetters({
      pageDConfig: "getPageDynamicConfig",
      selectedItemIndex: "getSelectionItemsByIndex",
      items: "getTodo",
      now: "getCurrentRouterName"
    }),
    floatButtonShowRealTime() {
      let dontShow = ["trashcan", "settings"];
      let show = dontShow.findIndex(x => x === this.now);
      return show === -1;
    }
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
