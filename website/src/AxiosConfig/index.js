import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-5w9z.onrender.com/",



  // process.env.ENV === "DEVELOPMENT"
  //   ? "http://localhost:3001"
  //   : "https://awdiz-6.com",
  withCredentials: true,
});

export default api;