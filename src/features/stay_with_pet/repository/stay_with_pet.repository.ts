import { stay_with_petApi } from '../api/stay_with_pet.api';
import { mapStayWithPetDtoToModel, StayWithPetModel } from '../models/stay_with_pet.model';

export const stay_with_petRepository = {
  getStayWithPetData: async (): Promise<StayWithPetModel[]> => {
    const response = await stay_with_petApi.fetchData();
    return response.data.map(mapStayWithPetDtoToModel);
  },
};
