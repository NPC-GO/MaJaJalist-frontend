<template>
  <v-container>settings</v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "settings",
  mounted() {
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
  }
};
</script>

<style>
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>
