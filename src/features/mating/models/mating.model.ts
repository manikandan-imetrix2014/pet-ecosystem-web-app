export interface MatingModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface MatingDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapMatingDtoToModel = (dto: MatingDto): MatingModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
