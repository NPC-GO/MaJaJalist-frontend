<template>
  <v-app-bar
    app
    clipped-left
    :color="
      pageDConfig.selectionMode ? 'grey darken-4' : 'deep-purple accent-4'
    "
    dark
  >
    <v-app-bar-nav-icon
      v-if="!pageDConfig.selectionMode"
      @click.stop="onDrawerClicked"
    />
    <v-btn v-else icon @click.stop="clrSelection">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-toolbar-title class="font-weight-black">
      <b>{{
        pageDConfig.selectionMode
          ? `${pageDConfig.selectedItemInCurrentPage.length} 已選擇`
          : "MaJaJaList"
      }}</b>
    </v-toolbar-title>
    <v-spacer />
    <v-scale-transition>
      <v-btn v-if="pageDConfig.selectionMode" key="export" icon>
        <v-icon>mdi-export-variant</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn v-if="pageDConfig.selectionMode" key="delete" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="pageDConfig.selectedItemInCurrentPage.length === 1"
        key="edit"
        icon
      >
        <v-icon color="amber">mdi-pencil</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-menu right bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-show="n.status"
          v-for="(n, i) in options"
          :key="i"
          @click="onMenuClicked(n)"
        >
          <v-icon class="mx-2" :color="n.status ? 'default' : 'gray'">{{
            n.icon
          }}</v-icon>
          <v-list-item-title>{{ n.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "toolbar",
  data: () => ({
    options: [
      {
        name: "新增項目",
        event: "add",
        icon: "mdi-plus",
        status: true
      },
      {
        name: "選取項目",
        event: "edit",
        icon: "mdi-checkbox-multiple-blank-outline",
        status: true
      }
    ]
  }),
  methods: {
    clrSelection() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectedItemInCurrentPage",
        data: []
      });
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectionMode",
        data: false
      });
      this.$emit("clearSelection");
      this.options[1].status = true;
    },
    addItem() {
      this.clrSelection();
      this.$emit("addItem");
    },
    onDrawerClicked() {
      this.$emit("onDrawerClicked");
    },
    onMenuClicked(option) {
      if (option.event === "edit") {
        this.editClicked(option);
      } else if (option.event === "add") {
        this.addItem();
      }
    },
    async editClicked(option) {
      option.status = false;
      await this.$store.dispatch("setPageDynamicConfig", {
        name: "selectionMode",
        data: true
      });
    }
  },
  computed: {
    ...mapGetters({ pageDConfig: "getPageDynamicConfig" })
  }
};
</script>
