import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { ROUTES } from './RouteConstants';

// Lazy loading features
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/features/auth/pages/RegisterPage'));
const DashboardPage = lazy(() => import('@/features/dashboard/pages/DashboardPage'));
const PetShopPage = lazy(() => import('@/features/pet_shop/pages/PetShopPage'));
const VetDoctorPage = lazy(() => import('@/features/vet_doctor/pages/VetDoctorPage'));
const PharmacyPage = lazy(() => import('@/features/pharmacy/pages/PharmacyPage'));
const CommunityPage = lazy(() => import('@/features/community/pages/CommunityPage'));
const DaycarePage = lazy(() => import('@/features/daycare/pages/DaycarePage'));
const ArticlesPage = lazy(() => import('@/features/articles/pages/ArticlesPage'));
const AdoptionPage = lazy(() => import('@/features/adoption/pages/AdoptionPage'));
const EmergencyPage = lazy(() => import('@/features/emergency/pages/EmergencyPage'));
const PetCafePage = lazy(() => import('@/features/pet_cafe/pages/PetCafePage'));
const AiAssistantPage = lazy(() => import('@/features/ai_assistant/pages/AiAssistantPage'));

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSkeleton className="h-screen w-full" />}>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.AUTH.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.AUTH.REGISTER} element={<RegisterPage />} />

        {/* Protected Dashboard Layout Routes */}
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.PET_SHOP} element={<PetShopPage />} />
          <Route path={ROUTES.VET_DOCTOR} element={<VetDoctorPage />} />
          <Route path={ROUTES.PHARMACY} element={<PharmacyPage />} />
          <Route path={ROUTES.COMMUNITY} element={<CommunityPage />} />
          <Route path={ROUTES.DAYCARE} element={<DaycarePage />} />
          <Route path={ROUTES.ARTICLES} element={<ArticlesPage />} />
          <Route path={ROUTES.ADOPTION} element={<AdoptionPage />} />
          <Route path={ROUTES.EMERGENCY} element={<EmergencyPage />} />
          <Route path={ROUTES.PET_CAFE} element={<PetCafePage />} />
          <Route path={ROUTES.AI_ASSISTANT} element={<AiAssistantPage />} />
        </Route>

        {/* Fallback to Dashboard if authenticated, else Login */}
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
