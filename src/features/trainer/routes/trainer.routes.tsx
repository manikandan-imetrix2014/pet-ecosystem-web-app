import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const TrainerPage = lazy(() => import('../pages/TrainerPage'));

export const trainerRoutes: RouteObject[] = [
  {
    path: 'trainer',
    element: <TrainerPage />,
  },
];
