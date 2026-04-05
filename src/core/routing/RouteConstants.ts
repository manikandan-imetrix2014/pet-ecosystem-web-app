export const ROUTES = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
  },
  DASHBOARD: '/dashboard',
  PET_SHOP: '/pet-shop',
  PET_OWNER: '/pet-owner',
  PHARMACY: '/pharmacy',
  VET_DOCTOR: '/vet-doctor',
  TRAINER: '/trainer',
  MATING: '/mating',
  PET_MEAT_SHOP: '/pet-meat-shop',
  COMMUNITY: '/community',
  DAYCARE: '/daycare',
  ARTICLES: '/articles',
  ANNOUNCEMENT: '/announcement',
  EMERGENCY: '/emergency',
  ADOPTION: '/adoption',
  PET_SPA: '/pet-spa',
  PET_CAFE: '/pet-cafe',
  STAY_WITH_PET: '/stay-with-pet',
  AI_ASSISTANT: '/ai-assistant',
  SETTINGS: '/settings',
};

export const ROLE_BASED_REDIRECTS: Record<string, string> = {
  admin: '/admin/dashboard',
  vet: '/vet/dashboard',
  user: '/dashboard',
};
