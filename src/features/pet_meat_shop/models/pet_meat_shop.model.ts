export interface PetMeatShopModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface PetMeatShopDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapPetMeatShopDtoToModel = (dto: PetMeatShopDto): PetMeatShopModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
