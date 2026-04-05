import { mediaApi } from '../api/media.api';
import { mapMediaDtoToModel, MediaModel } from '../models/media.model';

export const mediaRepository = {
  getMediaData: async (): Promise<MediaModel[]> => {
    const response = await mediaApi.fetchData();
    return response.data.map(mapMediaDtoToModel);
  },
};
