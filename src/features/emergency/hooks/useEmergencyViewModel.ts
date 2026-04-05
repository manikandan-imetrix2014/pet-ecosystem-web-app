import { useQuery } from '@tanstack/react-query';
import { emergencyRepository } from '../repository/emergency.repository';

export const useEmergencyViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['emergency'],
    queryFn: () => emergencyRepository.getEmergencyData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
