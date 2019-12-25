import Axios from "axios";
const existsDataLoader = Axios.create({
  baseURL: "/gql"
  // headers: {
  //   'Access-Control-Allow-Origin': '*'
  // }
});

async function getUserInfo() {
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

async function getExistsTodo() {
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
  getUserInfo,
  getExistsTodo
};
