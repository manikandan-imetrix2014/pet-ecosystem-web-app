import { useQuery } from '@tanstack/react-query';
import { pet_meat_shopRepository } from '../repository/pet_meat_shop.repository';

export const usePetMeatShopViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['pet_meat_shop'],
    queryFn: () => pet_meat_shopRepository.getPetMeatShopData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
