import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { axiosInstance, HeadersConstructor } from '@/api/utils';
import {
  CommentRecipeDto,
  CreateRecipeDto,
  GetRecipePreviewDto,
  IFavouriteRecipe,
  IRating,
  IRecipeFull,
  IRecipePreview,
} from '@/api/interfaces/recipes.types';

const url = 'recipe/';

class RecipesService {
  create(recipe: CreateRecipeDto) {
    return axiosInstance.post(url, recipe, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  get(recipeId: number): ApiRequestFnResponse<IRecipeFull> {
    return axiosInstance.get(`${ url }${ recipeId }`);
  }

  getPreview({ categories, status, belongTo }: GetRecipePreviewDto): ApiRequestFnResponse<IRecipePreview[]> {
    const categoriesParam = categories ? `categories=${ categories.join() }&` : '';
    const statusParam = status ? `status=${ status }&` : '';
    const belongToParam = belongTo ? `belongTo=${ belongTo }&` : '';

    return axiosInstance.get(
      `${ url }preview?${ categoriesParam }${ statusParam }${ belongToParam }`,
      { headers: new HeadersConstructor().authorization() },
    );
  }

  comment(recipeId: number, comment: CommentRecipeDto): ApiRequestFnResponse<Comment> {
    return axiosInstance.post(`${ url }${ recipeId }/comment/`, comment, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  addFavourite(recipeId: number): ApiRequestFnResponse<IFavouriteRecipe> {
    return axiosInstance.post(`${ url }${ recipeId }/favourite`, {}, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public isFavourite(recipeId: number): ApiRequestFnResponse<boolean> {
    return axiosInstance.get(`${ url }${ recipeId }/favourite`, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public deleteFavourite(recipeId: number): ApiRequestFnResponse<void> {
    return axiosInstance.delete(`${ url }${ recipeId }/favourite`, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public rate(recipeId: number, score: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.post(`${ url }${ recipeId }/rating`, { score }, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public getRating(recipeId: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.get(`${ url }${ recipeId }/rating`, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public updateRatingScore(recipeId: number, score: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.patch(`${ url }${ recipeId }/rating`, { score }, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public deleteRating(recipeId: number): ApiRequestFnResponse<void> {
    return axiosInstance.delete(`${ url }${ recipeId }/rating`, {
      headers: new HeadersConstructor().authorization(),
    });
  }
}

export const recipesService = new RecipesService();
