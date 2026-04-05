import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/core/routing/RouteConstants';
import { secureStorageService } from '@/core/storage/secureStorageService';

export const useAuthViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Mock login logic
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (email === 'test@peteco.com' && password === 'password123') {
        secureStorageService.setItem('auth_token', 'mock_jwt_token');
        secureStorageService.setItem('user', { id: '1', name: 'Pet Lover', email });
        navigate(ROUTES.DASHBOARD);
      } else {
        setError(new Error('Invalid email or password'));
      }
    } catch (err) {
      setError(new Error('An error occurred during login'));
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Mock registration logic
      await new Promise((resolve) => setTimeout(resolve, 1500));
      secureStorageService.setItem('auth_token', 'mock_jwt_token');
      secureStorageService.setItem('user', { id: '2', name, email });
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      setError(new Error('An error occurred during registration'));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    secureStorageService.removeItem('auth_token');
    secureStorageService.removeItem('user');
    navigate(ROUTES.AUTH.LOGIN);
  };

  return {
    login,
    register,
    logout,
    isLoading,
    error,
    data: undefined // Compatibility with generated types
  };
};
