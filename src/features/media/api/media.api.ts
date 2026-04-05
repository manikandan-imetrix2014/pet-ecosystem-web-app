import axiosClient from '@/core/network/axiosClient';

export const mediaApi = {
  fetchData: () => axiosClient.get('/media'),
  getById: (id: string) => axiosClient.get('/media/' + id),
};
