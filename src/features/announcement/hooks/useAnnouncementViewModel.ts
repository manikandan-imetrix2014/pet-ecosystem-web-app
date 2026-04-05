import { useQuery } from '@tanstack/react-query';
import { announcementRepository } from '../repository/announcement.repository';

export const useAnnouncementViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['announcement'],
    queryFn: () => announcementRepository.getAnnouncementData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
