import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
export const ApiClient = {
  async get(URL) {
    try {
      const promise = await axios.get(URL);
      return promise;
    } catch (error) {
      console.log("error is ", error)
    }
  },
  async post(URL, data) {
    try {
      const promise = await axios.post(URL, data);
      return promise;
    } catch (error) {
      console.log("error is", error)
    }
  },
};
