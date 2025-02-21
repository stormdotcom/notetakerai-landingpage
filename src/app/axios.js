import { HEADERS } from "@/modules/home/constant";
import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Base URL from .env
  timeout: 30000, // Request timeout
  headers: HEADERS
});

// Request Interceptor - Attach Token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor - Global Error Handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        "API Error:",
        error.response.data.message || "An error occurred"
      );
    }
    return Promise.reject(error);
  }
);

export default apiClient;
