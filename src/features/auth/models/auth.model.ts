export interface AuthModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface AuthDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapAuthDtoToModel = (dto: AuthDto): AuthModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
