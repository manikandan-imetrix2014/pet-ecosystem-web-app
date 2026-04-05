import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const AnnouncementPage = lazy(() => import('../pages/AnnouncementPage'));

export const announcementRoutes: RouteObject[] = [
  {
    path: 'announcement',
    element: <AnnouncementPage />,
  },
];
