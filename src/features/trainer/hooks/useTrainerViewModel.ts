import { useQuery } from '@tanstack/react-query';
import { trainerRepository } from '../repository/trainer.repository';

export const useTrainerViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['trainer'],
    queryFn: () => trainerRepository.getTrainerData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
