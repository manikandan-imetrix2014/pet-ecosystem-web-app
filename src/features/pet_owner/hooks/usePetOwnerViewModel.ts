import { useQuery } from '@tanstack/react-query';
import { pet_ownerRepository } from '../repository/pet_owner.repository';

export const usePetOwnerViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pet_owner'],
    queryFn: () => pet_ownerRepository.getPetOwnerData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
