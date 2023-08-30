import { axiosInstance } from '@/api/utils/axios-instance';
import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { IFavouriteRecipe, IRating } from '@/api/interfaces/user.types';
import { HeadersConstructor } from '@/api/utils';

const url = 'user/';

class UserService {
  public addFavouriteRecipe(recipeId: number): ApiRequestFnResponse<IFavouriteRecipe> {
    return axiosInstance.post(`${ url }favourite/${ recipeId }`, {}, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public getFavouriteRecipe(recipeId: number): ApiRequestFnResponse<IFavouriteRecipe | null> {
    return axiosInstance.get(`${ url }favourite/${ recipeId }`, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public deleteFavouriteRecipe(recipeId: number): ApiRequestFnResponse<void> {
    return axiosInstance.delete(`${ url }favourite/${ recipeId }`, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public rateRecipe(recipeId: number, score: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.post(`${ url }rating/${ recipeId }`, { score }, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public getRating(recipeId: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.get(`${ url }rating/${ recipeId }`, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public updateRatingScore(recipeId: number, score: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.patch(`${ url }rating/${ recipeId }`, { score }, {
      headers: new HeadersConstructor().authorization(),
    });
  }

  public deleteRating(recipeId: number): ApiRequestFnResponse<void> {
    return axiosInstance.delete(`${ url }rating/${ recipeId }`, {
      headers: new HeadersConstructor().authorization(),
    });
  }
}

export const userService = new UserService();
