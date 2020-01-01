<template>
  <v-app id="inspire">
    <NavDrawer ref="navdr" />
    <ToolBar
      ref="toptoolbar"
      @clearSelection="clearSelection"
      @onDrawerClicked="onDrawerClicked"
      @addItem="onAddButonClicked"
      @editItem="onEditButtonClicked"
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
    },
    onAddButonClicked() {
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
      try {
        this.$refs.toptoolbar.clrSelection();
      } catch (e) {
        return;
      }
    }
  },
  computed: {
    ...mapGetters({
      pageDConfig: "getPageDynamicConfig",
      selectedItemIndex: "getSelectionItemsByIndex",
      items: "getTodo"
    })
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
