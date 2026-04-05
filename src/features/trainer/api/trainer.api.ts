import axiosClient from '@/core/network/axiosClient';

export const trainerApi = {
  fetchData: () => axiosClient.get('/trainer'),
  getById: (id: string) => axiosClient.get('/trainer/' + id),
};
