import { pet_spaApi } from '../api/pet_spa.api';
import { mapPetSpaDtoToModel, PetSpaModel } from '../models/pet_spa.model';

export const pet_spaRepository = {
  getPetSpaData: async (): Promise<PetSpaModel[]> => {
    const response = await pet_spaApi.fetchData();
    return response.data.map(mapPetSpaDtoToModel);
  },
};
