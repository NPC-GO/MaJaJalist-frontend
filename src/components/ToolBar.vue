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
    <v-btn v-else icon @click.stop="clrSelection">
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
      <v-btn
        v-if="
          this.now !== 'trashcan' &&
            pageDConfig.selectedItemInCurrentPage.length
        "
        key="markUnFinish"
        icon
        @click.stop="markAllUnfinish"
      >
        <v-icon>mdi-alert-circle</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="
          this.now !== 'trashcan' &&
            pageDConfig.selectedItemInCurrentPage.length
        "
        key="markFinish"
        icon
        @click.stop="markAllFinish"
      >
        <v-icon>mdi-check-circle</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="
          this.now !== 'trashcan' &&
            pageDConfig.selectedItemInCurrentPage.length
        "
        key="delete"
        icon
        @click.stop="pushSelectedTrashcan"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="
          this.now !== 'trashcan' &&
            pageDConfig.selectedItemInCurrentPage.length === 1
        "
        key="edit"
        icon
        @click="editItem"
      >
        <v-icon color="amber">mdi-pencil</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="
          this.now === 'trashcan' &&
            pageDConfig.selectedItemInCurrentPage.length
        "
        key="revertDelete"
        icon
        @click="revertDelete"
      >
        <v-icon>mdi-delete-off</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-scale-transition>
      <v-btn
        v-if="
          this.now === 'trashcan' &&
            pageDConfig.selectedItemInCurrentPage.length
        "
        key="deleteForever"
        icon
        @click="deleteForever"
      >
        <v-icon color="red">mdi-delete-forever</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-menu right bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" v-show="now !== 'settings'">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-show="n.status"
          v-for="(n, i) in options"
          :key="i"
          @click="onMenuClicked(n)"
        >
          <v-icon class="mx-1" :color="n.status ? 'default' : 'gray'">{{
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
import Vuex from "vuex";
export default {
  name: "toolbar",
  data: () => ({
    options: [
      {
        name: "新增項目",
        event: "add",
        icon: "mdi-plus",
        status: true
      },
      {
        name: "選取項目",
        event: "edit",
        icon: "mdi-checkbox-multiple-blank-outline",
        status: true
      }
    ]
  }),
  methods: {
    clrSelection() {
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectedItemInCurrentPage",
        data: []
      });
      this.$store.dispatch("setPageDynamicConfig", {
        name: "selectionMode",
        data: false
      });
      this.$emit("clearSelection");
      this.options[1].status = true;
    },
    addItem() {
      this.clrSelection();
      this.$emit("addItem");
    },
    async editItem() {
      await this.$emit("editItem");
      this.clrSelection();
    },
    onDrawerClicked() {
      this.$emit("onDrawerClicked");
    },
    onMenuClicked(option) {
      if (option.event === "edit") {
        this.editClicked(option);
      } else if (option.event === "add") {
        this.addItem();
      }
    },
    async editClicked(option) {
      option.status = false;
      await this.$store.dispatch("setPageDynamicConfig", {
        name: "selectionMode",
        data: true
      });
    },
    markAllFinish() {
      let actions = [];
      this.SelectionItemsByIndex.forEach(element => {
        actions.push({ index: element, data: { status: { completed: true } } });
      });
      this.clrSelection();
      this.$store.dispatch("changeTodo", actions);
    },
    markAllUnfinish() {
      let actions = [];
      this.SelectionItemsByIndex.forEach(element => {
        actions.push({
          index: element,
          data: { status: { completed: false } }
        });
      });
      this.clrSelection();
      this.$store.dispatch("changeTodo", actions);
    },
    pushSelectedTrashcan() {
      let actions = [];
      this.SelectionItemsByIndex.forEach(element => {
        actions.push({
          index: element,
          data: { status: { deleted: true } }
        });
      });
      this.clrSelection();
      this.$store.dispatch("changeTodo", actions);
    },
    revertDelete() {
      let actions = [];
      this.SelectionItemsByIndex.forEach(element => {
        actions.push({
          index: element,
          data: { status: { deleted: false } }
        });
      });
      this.clrSelection();
      this.$store.dispatch("changeTodo", actions);
    },
    deleteForever() {
      let vm = this;
      let selectionItemsByIndex = this.SelectionItemsByIndex;
      this.$store.dispatch("setMsgBoxConfig", {
        title: "警告",
        content: "確定要永久刪除這些項目嗎？",
        submit: function() {
          vm.$store.dispatch("foreverDeleteItems", selectionItemsByIndex);
        }
      });
      this.clrSelection();
      this.pageDConfig.msgBoxKey++;
      this.$store.dispatch("setPageDynamicConfig", {
        name: "msgBoxStatus",
        data: true
      });
    }
  },
  computed: {
    ...mapGetters({
      pageDConfig: "getPageDynamicConfig",
      SelectionItemsByIndex: "getSelectionItemsByIndex",
      now: "getCurrentRouterName"
    })
  },
  watch: {
    now() {
      let dontShow = ["trashcan", "settings"];
      let show = dontShow.findIndex(x => x === this.now);
      this.options[0].status = show === -1;
    }
  }
};
</script>
