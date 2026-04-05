import { matingApi } from '../api/mating.api';
import { mapMatingDtoToModel, MatingModel } from '../models/mating.model';

export const matingRepository = {
  getMatingData: async (): Promise<MatingModel[]> => {
    const response = await matingApi.fetchData();
    return response.data.map(mapMatingDtoToModel);
  },
};
