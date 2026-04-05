import { pet_shopApi } from '../api/pet_shop.api';
import { mapPetShopDtoToModel, PetShopModel } from '../models/pet_shop.model';

export const pet_shopRepository = {
  getPetShopData: async (): Promise<PetShopModel[]> => {
    const response = await pet_shopApi.fetchData();
    return response.data.map(mapPetShopDtoToModel);
  },
};
