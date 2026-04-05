import { useQuery } from '@tanstack/react-query';
import { dashboardRepository } from '../repository/dashboard.repository';
import { useTranslation } from 'react-i18next';
import { Heart, Calendar, ShoppingBag } from 'lucide-react';

export const useDashboardViewModel = () => {
  const { t } = useTranslation();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => dashboardRepository.getDashboardData(),
  });

  const userName = "Pet Lover";

  const stats = [
    { label: t('dashboard.stats.pets'), value: '4', icon: Heart, color: 'text-pink-600', bg: 'bg-pink-100' },
    { label: t('dashboard.stats.appointments'), value: '2', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: t('dashboard.stats.orders'), value: '12', icon: ShoppingBag, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return {
    data,
    isLoading,
    error,
    userName,
    stats
  };
};
