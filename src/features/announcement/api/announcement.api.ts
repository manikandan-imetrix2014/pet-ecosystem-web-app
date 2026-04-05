import axiosClient from '@/core/network/axiosClient';

export const announcementApi = {
  fetchData: () => axiosClient.get('/announcement'),
  getById: (id: string) => axiosClient.get('/announcement/' + id),
};
