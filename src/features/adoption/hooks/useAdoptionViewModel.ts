import { useQuery } from '@tanstack/react-query';
import { adoptionRepository } from '../repository/adoption.repository';

export const useAdoptionViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['adoption'],
    queryFn: () => adoptionRepository.getAdoptionData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
