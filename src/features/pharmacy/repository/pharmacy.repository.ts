import { pharmacyApi } from '../api/pharmacy.api';
import { mapPharmacyDtoToModel, PharmacyModel } from '../models/pharmacy.model';

export const pharmacyRepository = {
  getPharmacyData: async (): Promise<PharmacyModel[]> => {
    const response = await pharmacyApi.fetchData();
    return response.data.map(mapPharmacyDtoToModel);
  },
};
