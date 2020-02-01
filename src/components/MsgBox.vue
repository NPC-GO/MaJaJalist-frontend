<template>
  <v-row justify="center">
    <v-dialog max-width="290" persistent v-model="pageConfig.msgBoxStatus">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?
        </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="dialog = false" color="green darken-1" text
            >Disagree
          </v-btn>
          <v-btn @click="dialog = false" color="green darken-1" text
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
    dialog: false
  }),
  computed: {
    ...mapGetters({
      pageConfig: "getPageDynamicConfig"
    })
  }
};
</script>

<style scoped />
