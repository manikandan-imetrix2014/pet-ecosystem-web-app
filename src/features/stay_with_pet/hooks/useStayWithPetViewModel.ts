import { useQuery } from '@tanstack/react-query';
import { stay_with_petRepository } from '../repository/stay_with_pet.repository';

export const useStayWithPetViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['stay_with_pet'],
    queryFn: () => stay_with_petRepository.getStayWithPetData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
