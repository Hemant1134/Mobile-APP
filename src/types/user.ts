// src/types/user.ts
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'hr' | 'employee';
    department?: string;
    position?: string;
    avatar?: string;
    phone?: string;
    joinDate?: string;
    isActive: boolean;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    user: User;
    token: string;
    refreshToken: string;
  }