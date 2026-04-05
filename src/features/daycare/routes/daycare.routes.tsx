import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const DaycarePage = lazy(() => import('../pages/DaycarePage'));

export const daycareRoutes: RouteObject[] = [
  {
    path: 'daycare',
    element: <DaycarePage />,
  },
];
