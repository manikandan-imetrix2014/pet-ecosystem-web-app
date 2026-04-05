import axiosClient from '@/core/network/axiosClient';

export const dashboardApi = {
  fetchData: () => axiosClient.get('/dashboard'),
  getById: (id: string) => axiosClient.get('/dashboard/' + id),
};
