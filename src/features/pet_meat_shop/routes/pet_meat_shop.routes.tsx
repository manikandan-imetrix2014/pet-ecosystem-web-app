import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const PetMeatShopPage = lazy(() => import('../pages/PetMeatShopPage'));

export const pet_meat_shopRoutes: RouteObject[] = [
  {
    path: 'pet_meat_shop',
    element: <PetMeatShopPage />,
  },
];
