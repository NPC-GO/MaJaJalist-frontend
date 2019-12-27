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
  }
};
</script>

<style>
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>
