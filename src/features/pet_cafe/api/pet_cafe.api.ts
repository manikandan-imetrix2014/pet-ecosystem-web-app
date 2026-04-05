import axiosClient from '@/core/network/axiosClient';

export const pet_cafeApi = {
  fetchData: () => axiosClient.get('/pet_cafe'),
  getById: (id: string) => axiosClient.get('/pet_cafe/' + id),
};
