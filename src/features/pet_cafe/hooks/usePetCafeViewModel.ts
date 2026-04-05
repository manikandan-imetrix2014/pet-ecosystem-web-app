import { useQuery } from '@tanstack/react-query';
import { pet_cafeRepository } from '../repository/pet_cafe.repository';

export const usePetCafeViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pet_cafe'],
    queryFn: () => pet_cafeRepository.getPetCafeData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
