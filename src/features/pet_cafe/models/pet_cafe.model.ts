export interface PetCafeModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface PetCafeDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapPetCafeDtoToModel = (dto: PetCafeDto): PetCafeModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
