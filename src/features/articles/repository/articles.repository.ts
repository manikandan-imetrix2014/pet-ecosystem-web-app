import { articlesApi } from '../api/articles.api';
import { mapArticlesDtoToModel, ArticlesModel } from '../models/articles.model';

export const articlesRepository = {
  getArticlesData: async (): Promise<ArticlesModel[]> => {
    const response = await articlesApi.fetchData();
    return response.data.map(mapArticlesDtoToModel);
  },
};
