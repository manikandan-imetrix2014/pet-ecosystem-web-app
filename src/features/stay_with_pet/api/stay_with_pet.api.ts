import axiosClient from '@/core/network/axiosClient';

export const stay_with_petApi = {
  fetchData: () => axiosClient.get('/stay_with_pet'),
  getById: (id: string) => axiosClient.get('/stay_with_pet/' + id),
};
