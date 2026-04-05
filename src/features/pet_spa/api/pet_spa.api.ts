import axiosClient from '@/core/network/axiosClient';

export const pet_spaApi = {
  fetchData: () => axiosClient.get('/pet_spa'),
  getById: (id: string) => axiosClient.get('/pet_spa/' + id),
};
