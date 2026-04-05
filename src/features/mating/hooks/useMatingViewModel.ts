import { useQuery } from '@tanstack/react-query';
import { matingRepository } from '../repository/mating.repository';

export const useMatingViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['mating'],
    queryFn: () => matingRepository.getMatingData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
