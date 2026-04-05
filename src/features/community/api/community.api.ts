import axiosClient from '@/core/network/axiosClient';

export const communityApi = {
  fetchData: () => axiosClient.get('/community'),
  getById: (id: string) => axiosClient.get('/community/' + id),
};
