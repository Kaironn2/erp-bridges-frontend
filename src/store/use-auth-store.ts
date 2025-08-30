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
  isLoading: boolean;
  error: string | null;
  login: (credentials: {
    username: string;
    password: string;
  }) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
  verifyAuth: () => Promise<void>;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null });
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
            isLoading: false,
          });

          return true;
        } catch (err: any) {
          const errorMessage =
            err.response?.data?.detail ||
            err.response?.data?.error ||
            'Falha no login. Verifique suas credenciais.';
          set({
            error: errorMessage,
            isLoading: false,
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

      verifyAuth: async () => {
        const { accessToken } = get();
        if (!accessToken) {
          set({ isAuthenticated: false });
          return;
        }

        try {
          await apiClient.post(apiRoutes.auth.verify, { token: accessToken });
        } catch (error) {
          console.error('Token verification failed, loggin out.');
          get().logout();
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
