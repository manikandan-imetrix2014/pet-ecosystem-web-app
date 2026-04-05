import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const ArticlesPage = lazy(() => import('../pages/ArticlesPage'));

export const articlesRoutes: RouteObject[] = [
  {
    path: 'articles',
    element: <ArticlesPage />,
  },
];
