export interface PetOwnerModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface PetOwnerDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapPetOwnerDtoToModel = (dto: PetOwnerDto): PetOwnerModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
