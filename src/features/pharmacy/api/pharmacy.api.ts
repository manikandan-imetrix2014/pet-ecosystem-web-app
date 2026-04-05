import axiosClient from '@/core/network/axiosClient';

export const pharmacyApi = {
  fetchData: () => axiosClient.get('/pharmacy'),
  getById: (id: string) => axiosClient.get('/pharmacy/' + id),
};
