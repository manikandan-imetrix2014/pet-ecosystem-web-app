import { pet_meat_shopApi } from '../api/pet_meat_shop.api';
import { mapPetMeatShopDtoToModel, PetMeatShopModel } from '../models/pet_meat_shop.model';

export const pet_meat_shopRepository = {
  getPetMeatShopData: async (): Promise<PetMeatShopModel[]> => {
    const response = await pet_meat_shopApi.fetchData();
    return response.data.map(mapPetMeatShopDtoToModel);
  },
};
