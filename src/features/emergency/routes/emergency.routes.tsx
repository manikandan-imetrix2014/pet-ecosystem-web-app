import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const EmergencyPage = lazy(() => import('../pages/EmergencyPage'));

export const emergencyRoutes: RouteObject[] = [
  {
    path: 'emergency',
    element: <EmergencyPage />,
  },
];
