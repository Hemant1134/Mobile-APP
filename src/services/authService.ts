// src/services/authService.ts
import { apiClient } from './api';
import { LoginRequest, LoginResponse } from '../types/user';

export const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    return await apiClient.post<LoginResponse>('/auth/login', credentials);
  },

  logout: async (): Promise<void> => {
    return await apiClient.post('/auth/logout');
  },

  register: async (userData: any): Promise<LoginResponse> => {
    return await apiClient.post<LoginResponse>('/auth/register', userData);
  },

  forgotPassword: async (email: string): Promise<void> => {
    return await apiClient.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token: string, password: string): Promise<void> => {
    return await apiClient.post('/auth/reset-password', { token, password });
  },

  checkAuthStatus: async (): Promise<LoginResponse | null> => {
    try {
      return await apiClient.get<LoginResponse>('/auth/me');
    } catch {
      return null;
    }
  },
};