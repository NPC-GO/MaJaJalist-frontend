<template>
  <v-container class="fill-height" fluid v-show="!empty">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-img
          src="https://education.github.com/assets/sdp-backpack-a64038716bf134f45e809ff86b9611fb97e41bbd2ccfa3181da73cf164d3c200.png"
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
