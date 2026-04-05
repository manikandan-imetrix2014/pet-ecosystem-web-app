export interface AnnouncementModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface AnnouncementDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapAnnouncementDtoToModel = (dto: AnnouncementDto): AnnouncementModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
