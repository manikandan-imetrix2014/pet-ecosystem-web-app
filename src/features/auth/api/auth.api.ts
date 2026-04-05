import axiosClient from '@/core/network/axiosClient';

export const authApi = {
  fetchData: () => axiosClient.get('/auth'),
  getById: (id: string) => axiosClient.get('/auth/' + id),
};
