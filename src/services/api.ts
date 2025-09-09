// src/services/api.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3000/api' 
  : 'https://your-production-api.com/api';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: any) => {
    // Add auth token here
    const token = null; // Get from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);

export const apiClient = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    api.get(url, config).then((response) => response.data),
    
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    api.post(url, data, config).then((response) => response.data),
    
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    api.put(url, data, config).then((response) => response.data),
    
  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    api.delete(url, config).then((response) => response.data),
};

export default api;