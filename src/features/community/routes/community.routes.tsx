import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const CommunityPage = lazy(() => import('../pages/CommunityPage'));

export const communityRoutes: RouteObject[] = [
  {
    path: 'community',
    element: <CommunityPage />,
  },
];
