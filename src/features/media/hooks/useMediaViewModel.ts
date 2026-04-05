import { useQuery } from '@tanstack/react-query';
import { mediaRepository } from '../repository/media.repository';

export const useMediaViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['media'],
    queryFn: () => mediaRepository.getMediaData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
