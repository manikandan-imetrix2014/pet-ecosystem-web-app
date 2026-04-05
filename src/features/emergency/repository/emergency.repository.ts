import { emergencyApi } from '../api/emergency.api';
import { mapEmergencyDtoToModel, EmergencyModel } from '../models/emergency.model';

export const emergencyRepository = {
  getEmergencyData: async (): Promise<EmergencyModel[]> => {
    const response = await emergencyApi.fetchData();
    return response.data.map(mapEmergencyDtoToModel);
  },
};
