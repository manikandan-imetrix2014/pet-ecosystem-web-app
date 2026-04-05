import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const StayWithPetPage = lazy(() => import('../pages/StayWithPetPage'));

export const stay_with_petRoutes: RouteObject[] = [
  {
    path: 'stay_with_pet',
    element: <StayWithPetPage />,
  },
];
