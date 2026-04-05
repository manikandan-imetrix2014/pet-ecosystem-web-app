import { pet_cafeApi } from '../api/pet_cafe.api';
import { mapPetCafeDtoToModel, PetCafeModel } from '../models/pet_cafe.model';

export const pet_cafeRepository = {
  getPetCafeData: async (): Promise<PetCafeModel[]> => {
    const response = await pet_cafeApi.fetchData();
    return response.data.map(mapPetCafeDtoToModel);
  },
};
