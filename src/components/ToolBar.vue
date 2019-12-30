<template>
  <v-app-bar
    app
    clipped-left
    :color="
      pageDConfig.selectedItemInCurrentPage.length
        ? 'grey darken-4'
        : 'deep-purple accent-4'
    "
    dark
  >
    <v-app-bar-nav-icon
      v-if="!pageDConfig.selectedItemInCurrentPage.length"
      @click.stop="onDrawerClicked"
    />
    <v-btn v-else icon @click.stop="clearSelection">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-toolbar-title class="font-weight-black">
      <b>{{
        pageDConfig.selectedItemInCurrentPage.length
          ? `${pageDConfig.selectedItemInCurrentPage.length} 已選擇`
          : "MaJaJaList"
      }}</b>
    </v-toolbar-title>
    <v-spacer />
    <v-scale-transition>
      <v-btn
        v-if="pageDConfig.selectedItemInCurrentPage.length"
        key="export"
        icon
      >
        <v-icon>mdi-export-variant</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="pageDConfig.selectedItemInCurrentPage.length"
        key="delete"
        icon
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="pageDConfig.selectedItemInCurrentPage.length"
        key="edit"
        icon
      >
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
        <v-list-item v-for="n in 0" :key="n" @click="() => {}">
          <v-list-item-title></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "toolbar",
  methods: {
    onDrawerClicked() {
      this.$emit("onDrawerClicked");
    },
    clearSelection() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectedItemInCurrentPage",
        data: []
      });
      this.$emit("clearSelection");
    }
  },
  computed: {
    ...mapGetters({ pageDConfig: "getPageDynamicConfig" })
  }
};
</script>
