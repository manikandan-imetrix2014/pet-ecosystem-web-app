import axiosClient from '@/core/network/axiosClient';

export const matingApi = {
  fetchData: () => axiosClient.get('/mating'),
  getById: (id: string) => axiosClient.get('/mating/' + id),
};
