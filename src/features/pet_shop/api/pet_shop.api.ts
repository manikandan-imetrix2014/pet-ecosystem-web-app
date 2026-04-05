import axiosClient from '@/core/network/axiosClient';

export const pet_shopApi = {
  fetchData: () => axiosClient.get('/pet_shop'),
  getById: (id: string) => axiosClient.get('/pet_shop/' + id),
};
