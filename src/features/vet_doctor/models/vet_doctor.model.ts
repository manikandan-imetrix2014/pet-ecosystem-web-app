export interface VetDoctorModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface VetDoctorDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapVetDoctorDtoToModel = (dto: VetDoctorDto): VetDoctorModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
