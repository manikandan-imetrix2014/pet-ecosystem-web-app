import { authApi } from '../api/auth.api';
import { mapAuthDtoToModel, AuthModel } from '../models/auth.model';

export const authRepository = {
  getAuthData: async (): Promise<AuthModel[]> => {
    const response = await authApi.fetchData();
    return response.data.map(mapAuthDtoToModel);
  },
};
