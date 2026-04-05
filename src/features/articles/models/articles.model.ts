export interface ArticlesModel {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface ArticlesDto {
  id: string;
  display_name: string;
  desc: string;
}

export const mapArticlesDtoToModel = (dto: ArticlesDto): ArticlesModel => ({
  id: dto.id,
  name: dto.display_name,
  description: dto.desc,
  createdAt: new Date().toISOString(),
});
