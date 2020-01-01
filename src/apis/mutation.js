import Axios from "axios";

const newDataController = Axios.create({
  baseURL: "/gql"
});

async function deleteTodoByID() {
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

async function changeTextInTodoByID() {
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

async function completeTodoByID() {
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

async function createTodo() {
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

async function createUser() {
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

async function login() {
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

async function changeMyAvatar() {
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

export default {
  deleteTodoByID,
  changeTextInTodoByID,
  completeTodoByID,
  createTodo,
  createUser,
  login,
  changeMyAvatar
};
