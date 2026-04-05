import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const AdoptionPage = lazy(() => import('../pages/AdoptionPage'));

export const adoptionRoutes: RouteObject[] = [
  {
    path: 'adoption',
    element: <AdoptionPage />,
  },
];
