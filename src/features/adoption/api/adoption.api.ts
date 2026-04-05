import axiosClient from '@/core/network/axiosClient';

export const adoptionApi = {
  fetchData: () => axiosClient.get('/adoption'),
  getById: (id: string) => axiosClient.get('/adoption/' + id),
};
