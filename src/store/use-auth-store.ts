import { create } from 'zustand';
import axios from 'axios';
import { apiRoutes } from '@/config/api-routes';

type User = {
  id: number;
  username: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (credentials) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post('/api/auth/login', credentials, {
        withCredentials: true,
      });

      if (res.data.success) {
        set({ isAuthenticated: true, loading: false });
      }
    } catch (err: any) {
      set({
        error: err.response?.data?.error || 'Login failed',
        loading: false,
      });
    }
  },

  logout: async () => {
    await axios.post('/api/auth/logout', {}, { withCredentials: true });
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    try {
      const res = await axios.get('/api/auth/me', {
        withCredentials: true,
      });
      set({ user: res.data, isAuthenticated: true });
    } catch {
      set({ user: null, isAuthenticated: false });
    }
  },
}));
