<template>
  <v-row justify="center">
    <v-dialog max-width="500" persistent v-model="pageConfig.msgBoxStatus">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">{{ title }} </v-card-title>
        <v-card-text>{{ content }} </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="closeBox" color="green darken-1" text>Disagree </v-btn>
          <v-btn @click="boxConfig.submit" color="green darken-1" text
            >Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "msgBox",
  data: () => ({
    dialog: false,
    title: "msgBox",
    content: "content"
  }),
  computed: {
    ...mapGetters({
      pageConfig: "getPageDynamicConfig",
      boxConfig: "getMsgBoxConfig"
    })
  },
  methods: {
    closeBox() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "msgBoxStatus",
        data: false
      });
    }
  }
};
</script>

<style scoped />
