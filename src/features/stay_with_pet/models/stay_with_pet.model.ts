export interface StayWithPetModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface StayWithPetDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapStayWithPetDtoToModel = (dto: StayWithPetDto): StayWithPetModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
