export interface DaycareModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface DaycareDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapDaycareDtoToModel = (dto: DaycareDto): DaycareModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
