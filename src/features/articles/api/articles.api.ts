import axiosClient from '@/core/network/axiosClient';

export const articlesApi = {
  fetchData: () => axiosClient.get('/articles'),
  getById: (id: string) => axiosClient.get('/articles/' + id),
};
