import axios from "axios";

// Lấy URL từ biến môi trường
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Cho phép gửi cookie/token với request
});

export default axiosInstance;
