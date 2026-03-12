import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adjuntar token en cada petición
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  loginWithGoogle: (googleToken: string) =>
    api.post('/auth/google', { token: googleToken }),
  getMe: () =>
    api.get('/auth/me'),
  logout: () =>
    api.post('/auth/logout'),
};

export const blogAPI = {
  getPosts: (params?: { category?: string; page?: number; limit?: number }) =>
    api.get('/blog/posts', { params }),
  getPost: (slug: string) =>
    api.get(`/blog/posts/${slug}`),
  createPost: (data: FormData) =>
    api.post('/blog/posts', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  updatePost: (id: string, data: FormData) =>
    api.put(`/blog/posts/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  deletePost: (id: string) =>
    api.delete(`/blog/posts/${id}`),
};
