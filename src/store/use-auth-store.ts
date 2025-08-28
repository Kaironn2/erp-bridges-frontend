import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { apiRoutes } from '@/lib/api-routes';
import apiClient from '@/lib/api-client';

type User = {
  id: number;
  username: string;
  email: string;
};

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (credentials: {
    username: string;
    password: string;
  }) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
  checkAuth: () => Promise<void>;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const res = await apiClient.post(apiRoutes.auth.login, credentials, {
            withCredentials: true,
          });

          const { user, access, refresh } = res.data;

          set({
            user,
            accessToken: access,
            refreshToken: refresh,
            isAuthenticated: true,
            loading: false,
          });

          return true;
        } catch (err: any) {
          const errorMessage =
            err.response?.data?.detail ||
            err.response?.data?.error ||
            'Falha no login. Verifique suas credenciais.';
          set({
            error: errorMessage,
            loading: false,
            isAuthenticated: false,
          });
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          error: null,
        });
      },

      checkAuth: async () => {
        try {
          const res = await apiClient.get(apiRoutes.auth.me, {
            withCredentials: true,
          });
          set({ user: res.data, isAuthenticated: true });
        } catch {
          set({ user: null, isAuthenticated: false });
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
