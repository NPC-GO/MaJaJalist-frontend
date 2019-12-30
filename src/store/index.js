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
      selectedItemInCurrentPage: []
    }
  },
  mutations: {
    SET_PAGE_DYNAMIC_CONFIG(state, data) {
      state.pageDynamicConfig[`${data.name}`] = data.data;
    },
    ADD_TODO(state, data) {
      state.Todos.unshift(data);
    }
  },
  actions: {
    setPageDynamicConfig({ commit }, data) {
      commit("SET_PAGE_DYNAMIC_CONFIG", data);
    },
    addTodo({ commit, state }, data) {
      data.id = require("js-sha256").sha256(data.textContent + Date.now());
      data.author = state.User.id;
      data.status.deleted = false;
      data.status.readonly = false;
      commit("ADD_TODO", data);
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
    }
  },
  modules: {}
});
