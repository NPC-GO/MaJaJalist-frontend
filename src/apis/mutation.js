import Axios from "axios";

export default function mutation() {
  const newDataController = Axios.create({
    baseURL: "/gql"
  });

  return {
    async deleteTodoByID() {
      try {
        return await newDataController.post("", {
          query: `
            query{
                <%GQL%>
            }
          `
        });
      } catch (e) {
        const status = e.response.status;
        if (status === 404) return null;
        throw error;
      }
    },

    async changeTextInTodoByID() {
      try {
        return await newDataController.post("", {
          query: `
            query{
                <%GQL%>
            }
          `
        });
      } catch (e) {
        const status = e.response.status;
        if (status === 404) return null;
        throw error;
      }
    },

    async completeTodoByID() {
      try {
        return await newDataController.post("", {
          query: `
            query{
                <%GQL%>
            }
          `
        });
      } catch (e) {
        const status = e.response.status;
        if (status === 404) return null;
        throw error;
      }
    },

    async createTodo() {
      try {
        return await newDataController.post("", {
          query: `
            query{
                <%GQL%>
            }
          `
        });
      } catch (e) {
        const status = e.response.status;
        if (status === 404) return null;
        throw error;
      }
    },

    async createUser() {
      try {
        return await newDataController.post("", {
          query: `
            query{
                <%GQL%>
            }
          `
        });
      } catch (e) {
        const status = e.response.status;
        if (status === 404) return null;
        throw error;
      }
    },

    async login() {
      try {
        return await newDataController.post("", {
          query: `
            query{
                <%GQL%>
            }
          `
        });
      } catch (e) {
        const status = e.response.status;
        if (status === 404) return null;
        throw error;
      }
    },

    async changeMyAvatar() {
      try {
        return await newDataController.post("", {
          query: `
            query{
                <%GQL%>
            }
          `
        });
      } catch (e) {
        const status = e.response.status;
        if (status === 404) return null;
        throw error;
      }
    }
  };
}
