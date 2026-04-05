export interface CommunityModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface CommunityDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapCommunityDtoToModel = (dto: CommunityDto): CommunityModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
