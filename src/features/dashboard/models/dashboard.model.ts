export interface DashboardModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface DashboardDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapDashboardDtoToModel = (dto: DashboardDto): DashboardModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
