import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const VetDoctorPage = lazy(() => import('../pages/VetDoctorPage'));

export const vet_doctorRoutes: RouteObject[] = [
  {
    path: 'vet_doctor',
    element: <VetDoctorPage />,
  },
];
