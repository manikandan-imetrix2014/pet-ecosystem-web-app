import axiosClient from '@/core/network/axiosClient';

export const ai_assistantApi = {
  fetchData: () => axiosClient.get('/ai_assistant'),
  getById: (id: string) => axiosClient.get('/ai_assistant/' + id),
};
