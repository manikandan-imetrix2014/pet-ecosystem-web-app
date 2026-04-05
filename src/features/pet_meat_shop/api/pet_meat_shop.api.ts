import axiosClient from '@/core/network/axiosClient';

export const pet_meat_shopApi = {
  fetchData: () => axiosClient.get('/pet_meat_shop'),
  getById: (id: string) => axiosClient.get('/pet_meat_shop/' + id),
};
