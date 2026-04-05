import { pet_ownerApi } from '../api/pet_owner.api';
import { mapPetOwnerDtoToModel, PetOwnerModel } from '../models/pet_owner.model';

export const pet_ownerRepository = {
  getPetOwnerData: async (): Promise<PetOwnerModel[]> => {
    const response = await pet_ownerApi.fetchData();
    return response.data.map(mapPetOwnerDtoToModel);
  },
};
