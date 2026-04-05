import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const PetOwnerPage = lazy(() => import('../pages/PetOwnerPage'));

export const pet_ownerRoutes: RouteObject[] = [
  {
    path: 'pet_owner',
    element: <PetOwnerPage />,
  },
];
