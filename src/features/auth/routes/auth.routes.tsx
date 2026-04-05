import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const AuthPage = lazy(() => import('../pages/AuthPage'));

export const authRoutes: RouteObject[] = [
  {
    path: 'auth',
    element: <AuthPage />,
  },
];
