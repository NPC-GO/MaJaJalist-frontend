<template>
  <v-container class="fill-height" fluid v-show="!empty">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-img
          src="@/assets/majaja.png"
          aspect-ratio="0.0001"
          max-width="229"
          max-height="264"
          justify="center"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "maincontentbackground",
  computed: {
    ...mapGetters({ now: "getCurrentRouterName" }),
    empty() {
      if (this.now === "maincontent") {
        return this.$store.getters.getTodo.length;
      } else if (this.now === "notdonepage") {
        return this.$store.getters.getUnfinishedTodo.length;
      } else if (this.now === "donepage") {
        return this.$store.getters.getFinishedTodo.length;
      } else if (this.now === "trashcan") {
        return this.$store.getters.getDeletedTodo.length;
      } else {
        return true;
      }
    }
  }
};
</script>
