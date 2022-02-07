import axios from "axios";

const api = axios.create({
  baseURL: "https://move-movies.herokuapp.com/",
});

export default api;
