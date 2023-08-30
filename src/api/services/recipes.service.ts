import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { axiosInstance, HeadersConstructor } from '@/api/utils';
import {
  Comment,
  CommentRecipeDto,
  CreateRecipeDto,
  IRecipeData,
  IRecipePreview,
  IRecipesIds,
} from '@/api/interfaces/recipes.types';
import { FiltersKeys } from '@/api/interfaces/filters.types';

const url = 'recipe/';

class RecipesService {
  create(recipe: CreateRecipeDto) {
    return axiosInstance.post(`${ url }combined/`, recipe, {
      headers: new HeadersConstructor().authorization(),
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
      headers: new HeadersConstructor().authorization(),
    });
  }

  getSharedIds(): ApiRequestFnResponse<IRecipesIds[]> {
    return axiosInstance.get(`${ url }ids/`);
  }

  getCreated(): ApiRequestFnResponse<IRecipeData[]> {
    return axiosInstance.get(`${ url }created/`, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  comment(recipeId: number, comment: CommentRecipeDto): ApiRequestFnResponse<Comment> {
    return axiosInstance.post(`${ url }${ recipeId }/comment/`, comment, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public getAllFavouriteRecipes(): ApiRequestFnResponse<IRecipePreview[]> {
    return axiosInstance.get(`${ url }favourite`, {
      headers: new HeadersConstructor().authorization(),
    });
  }
}

export const recipesService = new RecipesService();
