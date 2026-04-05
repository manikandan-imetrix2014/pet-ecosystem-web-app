import { useQuery } from '@tanstack/react-query';
import { articlesRepository } from '../repository/articles.repository';

export const useArticlesViewModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articlesRepository.getArticlesData(),
  });

  return {
    data,
    isLoading,
    error,
  };
};
