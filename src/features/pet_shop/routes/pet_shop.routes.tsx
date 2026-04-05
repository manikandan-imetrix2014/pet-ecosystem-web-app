import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const PetShopPage = lazy(() => import('../pages/PetShopPage'));

export const pet_shopRoutes: RouteObject[] = [
  {
    path: 'pet_shop',
    element: <PetShopPage />,
  },
];
