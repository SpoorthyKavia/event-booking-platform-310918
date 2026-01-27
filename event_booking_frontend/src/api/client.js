import axios from "axios";

// PUBLIC_INTERFACE
export const API_BASE =
  process.env.REACT_APP_API_BASE || "http://localhost:3001";

// Axios client with auth header injection and error handling
const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// Attach JWT if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Unified error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Optionally, auto-logout if needed
        window.dispatchEvent(new Event("auth-logout"));
      }
      // Let the caller handle the error message
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

export default api;
