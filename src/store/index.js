/*jshint -W024 */
import Vue from "vue";
import Vuex from "vuex";
const query = () => import("@/apis/query");
const mutation = () => import("@/apis/mutation");
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    Todos: [
      {
        id: "123",
        textContent: "test",
        status: { completed: true, deleted: false, readonly: false },
        author: "npcgo",
        sort: 0
      }
    ],
    User: (() => {
      return {
        id: "",
        email: "",
        nickName: "",
        avatar: "",
        userLevel: "",
        special: "",
        emailVerified: "",
        lastLogin: ""
      };
    })(),
    pageDynamicConfig: {
      editorDialogStatus: false,
      editorDialogKey: 100,
      currentPage: null,
      selectedItemInCurrentPage: [],
      selectionMode: false,
      msgBoxStatus: false,
      msgBoxKey: 1
    },
    editorDialogConfig: { mode: true, text: "", checked: false },
    msgBoxConfig: { title: "", content: "", submit: null }
  },
  mutations: {
    SET_PAGE_DYNAMIC_CONFIG(state, data) {
      state.pageDynamicConfig[`${data.name}`] = data.data;
    },
    ADD_TODO(state, data) {
      state.Todos.unshift(data);
    },
    SET_EDITOR_DIALOG_CONFIG(state, data) {
      state.editorDialogConfig = data;
    },
    SET_MSG_BOX_CONFIG(state, data) {
      state.msgBoxConfig = data;
    },
    CHANGE_TODO(state, data) {
      let item = state.Todos[`${data.index}`];
      item.textContent = data.data.textContent || item.textContent;
      item.status.completed = (function() {
        if (data.data.status.completed === undefined) {
          return item.status.completed;
        }
        return data.data.status.completed;
      })();
      item.status.deleted = (function() {
        if (data.data.status.deleted === undefined) {
          return item.status.deleted;
        }
        return data.data.status.deleted;
      })();
      item.status.readonly = data.data.status.readonly || item.status.readonly;
      item.author = data.data.author || item.author;
    },
    DELETE_TODO(state, data) {
      state.Todos.splice(data, 1);
    }
  },
  actions: {
    setPageDynamicConfig({ commit }, data) {
      commit("SET_PAGE_DYNAMIC_CONFIG", data);
    },
    setEditorDialogConfig({ commit }, data) {
      commit("SET_EDITOR_DIALOG_CONFIG", data);
    },
    setMsgBoxConfig({ commit }, data) {
      commit("SET_MSG_BOX_CONFIG", data);
    },
    addTodo({ commit, state }, data) {
      data.id = require("js-sha256").sha256(data.textContent + Date.now());
      data.author = state.User.id;
      data.status.deleted = false;
      data.status.readonly = false;
      commit("ADD_TODO", data);
    },
    changeTodo({ commit }, data) {
      data.forEach(element => commit("CHANGE_TODO", element));
    },
    foreverDeleteItems({ commit }, data) {
      data.sort();
      let i = data.length;
      while (i--) {
        commit("DELETE_TODO", data[i]);
      }
    }
  },
  getters: {
    getUnfinishedTodo({ Todos }) {
      return Todos.filter(
        data => data.status.completed === false && data.status.deleted === false
      );
    },
    getFinishedTodo({ Todos }) {
      return Todos.filter(
        data => data.status.completed === true && data.status.deleted === false
      );
    },
    getDeletedTodo({ Todos }) {
      return Todos.filter(data => data.status.deleted === true);
    },
    getTodo({ Todos }) {
      return Todos.filter(data => data.status.deleted === false);
    },
    getPageDynamicConfig(state) {
      return state.pageDynamicConfig;
    },
    getCurrentRouterName(state) {
      return state.pageDynamicConfig.currentPage;
    },
    getEditorDialogConfig(state) {
      return state.editorDialogConfig;
    },
    getMsgBoxConfig(state) {
      return state.msgBoxConfig;
    },
    getSelectionItemsByIndex(state) {
      let list = state.pageDynamicConfig.selectedItemInCurrentPage;
      let listByItem = [];
      list.forEach(element =>
        listByItem.push(state.Todos.findIndex(x => x.id === element))
      );
      return listByItem;
    }
  },
  modules: {}
});
