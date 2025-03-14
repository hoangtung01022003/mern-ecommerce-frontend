import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Cho phép gửi cookie/token với request
});

// const axiosInstance = axios.create({
// 	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "api",
// 	withCredentials: true, // send cookies to the server
// });

export default axiosInstance;
