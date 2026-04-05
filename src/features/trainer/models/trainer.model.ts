export interface TrainerModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface TrainerDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapTrainerDtoToModel = (dto: TrainerDto): TrainerModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
