<template>
  <v-row justify="center">
    <v-dialog v-model="pageDConfig.editorDialogStatus" max-width="500">
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >
        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            icon
            :color="checked ? 'green' : 'gray'"
            @click="checked = !checked"
          >
            <v-icon>{{ checkButtonIcon }}</v-icon>
          </v-btn>
          <v-btn color="green darken-1" text @click="closeDialog">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="closeDialog">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "editordialog",
  data: () => ({
    checked: false
  }),
  computed: {
    ...mapGetters({ pageDConfig: "getPageDynamicConfig" }),
    checkButtonIcon() {
      return this.checked
        ? "mdi-check-circle"
        : "mdi-checkbox-blank-circle-outline";
    }
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "editorDialogStatus",
        data: false
      });
    },
    onCheckButtonClick() {
      this.checked = !this.checked;
    }
  }
};
</script>
