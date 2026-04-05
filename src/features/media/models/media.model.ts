export interface MediaModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface MediaDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapMediaDtoToModel = (dto: MediaDto): MediaModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
