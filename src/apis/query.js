import Axios from "axios";

export default function query() {
  const existsDataLoader = Axios.create({
    baseURL: "/gql"
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // }
  });
  return {
    async myUserData() {
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
    },

    async todoByUserID() {
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
    },

    async myPageConfig() {
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
  };
}
