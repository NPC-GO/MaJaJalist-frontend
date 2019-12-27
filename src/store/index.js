/*jshint -W024 */
import Vue from "vue";
import Vuex from "vuex";
const query = () => import("@/apis/query");
const mutation = () => import("@/apis/mutation");
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    Todo: (() => {
      return [
        {
          id: "123",
          textContent: "test",
          status: { completed: true, deleted: false, readonly: false },
          author: "npcgo",
          sort: 0
        }
      ];
    })(),
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
      currentPage: null
    }
  },
  mutations: {
    SET_PAGE_DYNAMIC_CONFIG(state, data) {
      state.pageDynamicConfig[`${data.name}`] = data.data;
    }
  },
  actions: {
    setPageDynamicConfig({ commit }, data) {
      commit("SET_PAGE_DYNAMIC_CONFIG", data);
    }
  },
  getters: {
    getUnfinishedTodo({ Todo }) {
      return Todo.filter(
        data => data.status.completed === false && data.status.deleted === false
      );
    },
    getFinishedTodo({ Todo }) {
      return Todo.filter(
        data => data.status.completed === true && data.status.deleted === false
      );
    },
    getDeletedTodo({ Todo }) {
      return Todo.filter(data => data.status.deleted === true);
    },
    getTodo({ Todo }) {
      return Todo.filter(data => data.status.deleted === false);
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
