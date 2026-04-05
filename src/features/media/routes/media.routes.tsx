import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const MediaPage = lazy(() => import('../pages/MediaPage'));

export const mediaRoutes: RouteObject[] = [
  {
    path: 'media',
    element: <MediaPage />,
  },
];
