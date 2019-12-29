<template>
  <v-form v-model="valid">
    <v-row justify="center">
      <v-dialog v-model="pageDConfig.editorDialogStatus" max-width="500">
        <v-card>
          <v-card-title primary-title class=" gray lighten-2 headline">{{
            mode ? "新增項目" : "編輯項目"
          }}</v-card-title>
          <v-spacer></v-spacer>
          <v-container fluid>
            <v-textarea
              required
              clear-icon="mdi-close-circle"
              :auto-grow="true"
              v-model="textAreaTextContent"
              placeholder="輸入項目內容"
            ></v-textarea>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              rounded
              :dark="checked ? true : false"
              :color="checked ? 'green' : 'amber'"
              @click="checked = !checked"
              :disabled="!valid || !textAreaTextContent.trim()"
            >
              <v-icon>{{ checkButtonIcon }}</v-icon>
              {{ checked ? "已完成" : "未完成" }}
            </v-btn>
            <v-btn
              dark
              rounded
              color="deep-purple accent-4"
              @click="closeDialog"
            >
              <v-icon>mdi-close-circle-outline</v-icon>
              取消
            </v-btn>
            <v-btn
              :disabled="!valid || !textAreaTextContent.trim()"
              :dark="!!textAreaTextContent.trim()"
              rounded
              color="deep-purple accent-4"
              @click="submitDialog"
            >
              <v-icon>mdi-check-all</v-icon>
              確定
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "editordialog",
  data: () => ({
    mode: true, //true=add,false=edit
    checked: false,
    title: "新增項目",
    textAreaTextContent: "",
    valid: true
  }),
  computed: {
    ...mapGetters({ pageDConfig: "getPageDynamicConfig" }),
    checkButtonIcon() {
      return this.checked ? "mdi-check-circle" : "mdi-alert-circle-outline";
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
    },
    submitDialog() {
      if (this.mode) {
        //add item
        this.$store.dispatch("addTodo", {
          textContent: this.textAreaTextContent,
          status: {
            completed: this.checked
          }
        });
      } else {
      }
      this.closeDialog();
    }
  }
};
</script>
