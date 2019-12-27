import Axios from "axios";

const existsDataLoader = Axios.create({
  baseURL: "/gql"
  // headers: {
  //   'Access-Control-Allow-Origin': '*'
  // }
});

async function myUserData() {
  try {
    return await existsDataLoader.post("", {
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

async function todoByUserID() {
  try {
    return await existsDataLoader.post("", {
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

async function myPageConfig() {
  try {
    return await existsDataLoader.post("", {
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
  myUserData,
  todoByUserID,
  myPageConfig
};
