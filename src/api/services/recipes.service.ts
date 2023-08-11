import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { axiosInstance } from '@/api/utils';
import {
  Comment,
  CommentRecipeDto,
  CreateRecipeDto,
  IRecipeData,
  IRecipePreview,
  IRecipesIds,
} from '@/api/interfaces/recipes.types';
import { FiltersKeys } from '@/api/interfaces/filters.types';
import { cookieService } from '@/api/services/cookie.service';

const token = cookieService?.getToken();
const url = axiosInstance.defaults.baseURL + 'recipe/';

class RecipesService {
  create(recipe: CreateRecipeDto) {
    return axiosInstance.post(`${ url }combined/`, recipe, {
      headers: { Authorization: `Bearer ${ token }` },
    });
  }

  get(recipeId: number): ApiRequestFnResponse<IRecipeData> {
    return axiosInstance.get(`${ url }${ recipeId }/`);
  }

  getShared(filters?: FiltersKeys[]): ApiRequestFnResponse<IRecipePreview[]> {
    return axiosInstance.post(`${ url }shared/`, {
      filters_keys: filters,
    });
  }

  getMy(): ApiRequestFnResponse<IRecipePreview[]> {
    return axiosInstance.get(`${ url }my/`, {
      headers: { Authorization: `Bearer ${ token }` },
    });
  }

  getSharedIds(): ApiRequestFnResponse<IRecipesIds[]> {
    return axiosInstance.get(`${ url }ids/`);
  }

  getCreated(): ApiRequestFnResponse<IRecipeData[]> {
    return axiosInstance.get(`${ url }created/`, {
      headers: { Authorization: `Bearer ${ token }` },
    });
  }

  comment(recipeId: number, comment: CommentRecipeDto): ApiRequestFnResponse<Comment> {
    return axiosInstance.post(`${ url }${ recipeId }/comment/`, comment, {
      headers: { Authorization: `Bearer ${ token }` },
    });
  }
}

export const recipesService = new RecipesService();