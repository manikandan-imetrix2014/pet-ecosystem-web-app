import { useQuery } from '@tanstack/react-query';
import { pharmacyRepository } from '../repository/pharmacy.repository';

export const usePharmacyViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pharmacy'],
    queryFn: () => pharmacyRepository.getPharmacyData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
