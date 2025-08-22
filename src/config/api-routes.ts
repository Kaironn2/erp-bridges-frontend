const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiRoutes = {
  auth: {
    login: `${API_BASE_URL}/api/auth/token/`,
    logout: `${API_BASE_URL}/api/auth/logout/`,
    refresh: `${API_BASE_URL}/api/auth/token/refresh/`,
    verify: `${API_BASE_URL}/api/auth/token/verify/`,
    me: `${API_BASE_URL}/api/auth/me/`,
  },
};
