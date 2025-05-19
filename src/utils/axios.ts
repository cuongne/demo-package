import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.topdev.asia/td/v2',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth tokens or other headers here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  },
);

export default axiosInstance;
