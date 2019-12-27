import Vue from "vue";
import Vuex from "vuex";
import query from "@/apis/query";
Vue.use(Vuex);

const apiQuery = query();
export default new Vuex.Store({
  state: {
    Todo: (() => {
      return [
        {
          id: "123",
          textContent: "test",
          status: { completed: true, deleted: true, readonly: false },
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
      itemsLengthInCurrentPage: 0,
      editorDialogStatus: false
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
    }
  },
  modules: {}
});
