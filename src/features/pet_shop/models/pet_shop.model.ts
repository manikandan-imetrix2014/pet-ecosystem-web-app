export interface PetShopModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface PetShopDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapPetShopDtoToModel = (dto: PetShopDto): PetShopModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
