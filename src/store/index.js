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
      editorDialogKey: -1,
      currentPage: null,
      selectedItemInCurrentPage: [],
      selectionMode: false
    },
    editorDialogConfig: { mode: true, text: "", checked: false }
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
    CHANGE_TODO(state, data) {
      let item = state.Todos[`${data.index}`];
      item.textContent = data.data.textContent || item.textContent;
      item.status.completed = data.data.status.completed;
      item.status.deleted = data.data.status.deleted || item.status.deleted;
      item.status.readonly = data.data.status.readonly || item.status.readonly;
      item.author = data.data.author || item.author;
    }
  },
  actions: {
    setPageDynamicConfig({ commit }, data) {
      commit("SET_PAGE_DYNAMIC_CONFIG", data);
    },
    setEditorDialogConfig({ commit }, data) {
      commit("SET_EDITOR_DIALOG_CONFIG", data);
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
    getSelectionItemsByIndex(state) {
      let list = state.pageDynamicConfig.selectedItemInCurrentPage;
      let listByItem = [];
      list.forEach(element =>
        listByItem.push(list.findIndex(x => x === element))
      );
      return listByItem;
    }
  },
  modules: {}
});
