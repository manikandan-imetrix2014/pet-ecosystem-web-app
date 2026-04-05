import { useQuery } from '@tanstack/react-query';
import { communityRepository } from '../repository/community.repository';

export const useCommunityViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['community'],
    queryFn: () => communityRepository.getCommunityData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
