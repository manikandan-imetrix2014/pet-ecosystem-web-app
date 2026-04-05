import { useQuery } from '@tanstack/react-query';
import { daycareRepository } from '../repository/daycare.repository';

export const useDaycareViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['daycare'],
    queryFn: () => daycareRepository.getDaycareData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
