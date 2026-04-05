import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const AiAssistantPage = lazy(() => import('../pages/AiAssistantPage'));

export const ai_assistantRoutes: RouteObject[] = [
  {
    path: 'ai_assistant',
    element: <AiAssistantPage />,
  },
];
