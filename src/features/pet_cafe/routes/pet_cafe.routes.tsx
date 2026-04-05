import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const PetCafePage = lazy(() => import('../pages/PetCafePage'));

export const pet_cafeRoutes: RouteObject[] = [
  {
    path: 'pet_cafe',
    element: <PetCafePage />,
  },
];
