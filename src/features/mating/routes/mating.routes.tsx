import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const MatingPage = lazy(() => import('../pages/MatingPage'));

export const matingRoutes: RouteObject[] = [
  {
    path: 'mating',
    element: <MatingPage />,
  },
];
