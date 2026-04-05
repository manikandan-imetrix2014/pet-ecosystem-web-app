import { daycareApi } from '../api/daycare.api';
import { mapDaycareDtoToModel, DaycareModel } from '../models/daycare.model';

export const daycareRepository = {
  getDaycareData: async (): Promise<DaycareModel[]> => {
    const response = await daycareApi.fetchData();
    return response.data.map(mapDaycareDtoToModel);
  },
};
