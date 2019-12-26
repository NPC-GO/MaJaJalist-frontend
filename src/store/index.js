import Vue from "vue";
import Vuex from "vuex";
import query from "@/apis/query";
Vue.use(Vuex);

const apiQuery = query();
export default new Vuex.Store({
  state: {
    Todo: (() => {
      return [
        // {
        //   id: "123",
        //   textContent: "test",
        //   status: "unFinished",
        //   author: "npcgo",
        //   sort: 0
        // }
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
    })()
  },
  mutations: {},
  actions: {},
  getters: {
    getUnfinishedTodo({ Todo }) {
      return Todo.filter(data => data.status === "unFinished");
    },
    getFinishedTodo({ Todo }) {
      return Todo.filter(data => data.status === "completed");
    },
    getTodo({ Todo }) {
      return Todo;
    }
  },
  modules: {}
});
