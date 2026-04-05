export interface PetSpaModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface PetSpaDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapPetSpaDtoToModel = (dto: PetSpaDto): PetSpaModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
