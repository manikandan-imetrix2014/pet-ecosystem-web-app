export interface PharmacyModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface PharmacyDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapPharmacyDtoToModel = (dto: PharmacyDto): PharmacyModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
