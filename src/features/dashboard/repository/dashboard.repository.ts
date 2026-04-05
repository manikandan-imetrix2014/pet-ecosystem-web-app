import { dashboardApi } from '../api/dashboard.api';
import { mapDashboardDtoToModel, DashboardModel } from '../models/dashboard.model';

export const dashboardRepository = {
  getDashboardData: async (): Promise<DashboardModel[]> => {
    const response = await dashboardApi.fetchData();
    return response.data.map(mapDashboardDtoToModel);
  },
};
