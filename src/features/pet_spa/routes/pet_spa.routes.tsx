import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const PetSpaPage = lazy(() => import('../pages/PetSpaPage'));

export const pet_spaRoutes: RouteObject[] = [
  {
    path: 'pet_spa',
    element: <PetSpaPage />,
  },
];
