import { announcementApi } from '../api/announcement.api';
import { mapAnnouncementDtoToModel, AnnouncementModel } from '../models/announcement.model';

export const announcementRepository = {
  getAnnouncementData: async (): Promise<AnnouncementModel[]> => {
    const response = await announcementApi.fetchData();
    return response.data.map(mapAnnouncementDtoToModel);
  },
};
