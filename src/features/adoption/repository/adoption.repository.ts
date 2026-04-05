import { adoptionApi } from '../api/adoption.api';
import { mapAdoptionDtoToModel, AdoptionModel } from '../models/adoption.model';

export const adoptionRepository = {
  getAdoptionData: async (): Promise<AdoptionModel[]> => {
    const response = await adoptionApi.fetchData();
    return response.data.map(mapAdoptionDtoToModel);
  },
};
