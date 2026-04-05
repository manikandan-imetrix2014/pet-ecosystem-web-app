export interface EmergencyModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface EmergencyDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapEmergencyDtoToModel = (dto: EmergencyDto): EmergencyModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
