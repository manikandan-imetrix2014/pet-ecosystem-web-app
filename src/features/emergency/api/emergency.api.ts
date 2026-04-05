import axiosClient from '@/core/network/axiosClient';

export const emergencyApi = {
  fetchData: () => axiosClient.get('/emergency'),
  getById: (id: string) => axiosClient.get('/emergency/' + id),
};
