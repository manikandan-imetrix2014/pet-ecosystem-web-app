import { communityApi } from '../api/community.api';
import { mapCommunityDtoToModel, CommunityModel } from '../models/community.model';

export const communityRepository = {
  getCommunityData: async (): Promise<CommunityModel[]> => {
    const response = await communityApi.fetchData();
    return response.data.map(mapCommunityDtoToModel);
  },
};
