export interface AdoptionModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface AdoptionDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapAdoptionDtoToModel = (dto: AdoptionDto): AdoptionModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
