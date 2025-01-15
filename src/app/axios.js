import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: import.meta.env.API_BASE_URL,
  timeout: 10000, // Request timeout (10 seconds)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token to headers if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
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
