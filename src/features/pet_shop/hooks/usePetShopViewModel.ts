import { useQuery } from '@tanstack/react-query';
import { pet_shopRepository } from '../repository/pet_shop.repository';

export const usePetShopViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pet_shop'],
    queryFn: () => pet_shopRepository.getPetShopData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
