import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { authAPI } from '../lib/api';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginWithGoogle: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    const token = localStorage.getItem('access_token');
    if (stored && token) {
      try {
        setUser(JSON.parse(stored));
        // Verify token with backend
        authAPI.getMe()
          .then(res => setUser(res.data))
          .catch(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('access_token');
            setUser(null);
          })
          .finally(() => setIsLoading(false));
      } catch {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setIsLoading(true);
        const res = await authAPI.loginWithGoogle(tokenResponse.access_token);
        const { user: userData, access_token } = res.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } catch (err) {
        console.error('Login failed:', err);
      } finally {
        setIsLoading(false);
      }
    },
    onError: (err) => {
      console.error('Google login error:', err);
    },
  });

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch {
      // Silent fail
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      loginWithGoogle,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
