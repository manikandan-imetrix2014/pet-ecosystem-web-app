import { useQuery } from '@tanstack/react-query';
import { pet_spaRepository } from '../repository/pet_spa.repository';

export const usePetSpaViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pet_spa'],
    queryFn: () => pet_spaRepository.getPetSpaData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
