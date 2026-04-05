import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const PharmacyPage = lazy(() => import('../pages/PharmacyPage'));

export const pharmacyRoutes: RouteObject[] = [
  {
    path: 'pharmacy',
    element: <PharmacyPage />,
  },
];
