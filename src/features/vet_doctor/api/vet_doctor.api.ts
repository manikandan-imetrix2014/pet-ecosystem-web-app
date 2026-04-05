import axiosClient from '@/core/network/axiosClient';

export const vet_doctorApi = {
  fetchData: () => axiosClient.get('/vet_doctor'),
  getById: (id: string) => axiosClient.get('/vet_doctor/' + id),
};
