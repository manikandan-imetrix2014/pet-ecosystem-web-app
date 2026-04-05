import axiosClient from '@/core/network/axiosClient';

export const daycareApi = {
  fetchData: () => axiosClient.get('/daycare'),
  getById: (id: string) => axiosClient.get('/daycare/' + id),
};
