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
    <v-btn v-else icon @click.stop="clearSelection">
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
      <v-btn v-if="pageDConfig.selectionMode" key="edit" icon>
        <v-icon>mdi-pencil</v-icon>
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
          :disabled="!n.status"
          v-for="(n, i) in options"
          :key="i"
          @click="onMenuClicked"
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
        name: "選取項目",
        event: "edit",
        icon: "mdi-checkbox-multiple-blank-outline",
        status: true
      }
    ]
  }),
  methods: {
    onDrawerClicked() {
      this.$emit("onDrawerClicked");
    },
    clearSelection() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectedItemInCurrentPage",
        data: []
      });
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectionMode",
        data: false
      });
      this.$emit("clearSelection");
    },
    onMenuClicked() {
      this.$store.dispatch("setPageDynamicConfig", {
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
