import axiosClient from '@/core/network/axiosClient';

export const pet_ownerApi = {
  fetchData: () => axiosClient.get('/pet_owner'),
  getById: (id: string) => axiosClient.get('/pet_owner/' + id),
};
