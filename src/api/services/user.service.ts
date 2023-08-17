import { axiosInstance } from '@/api/utils/axios-instance';
import { ApiRequestFnResponse } from '@/api/utils/api.types';
import { IFavouriteRecipe, IRating } from '@/api/interfaces/user.types';
import { cookieService } from '@/api/services/cookie.service';

const url = axiosInstance.defaults.baseURL + 'user/';
const getToken = () => cookieService.getToken();

class UserService {
  public addFavouriteRecipe(recipeId: number): ApiRequestFnResponse<IFavouriteRecipe> {
    return axiosInstance.post(`${ url }favourite/${ recipeId }`, {}, {
      headers: {
        'Authorization': `Bearer ${ getToken() }`,
      },
    });
  }

  public getFavouriteRecipe(recipeId: number): ApiRequestFnResponse<IFavouriteRecipe | null> {
    return axiosInstance.get(`${ url }favourite/${ recipeId }`, {
      headers: {
        'Authorization': `Bearer ${ getToken() }`,
      },
    });
  }

  public deleteFavouriteRecipe(recipeId: number): ApiRequestFnResponse<void> {
    return axiosInstance.delete(`${ url }favourite/${ recipeId }`, {
      headers: {
        'Authorization': `Bearer ${ getToken() }`,
      },
    });
  }

  public rateRecipe(recipeId: number, score: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.post(`${ url }rating/${ recipeId }`, { score }, {
      headers: {
        'Authorization': `Bearer ${ getToken() }`,
      },
    });
  }

  public getRating(recipeId: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.get(`${ url }rating/${ recipeId }`, {
      headers: {
        'Authorization': `Bearer ${ getToken() }`,
      },
    });
  }

  public updateRatingScore(recipeId: number, score: number): ApiRequestFnResponse<IRating> {
    return axiosInstance.patch(`${ url }rating/${ recipeId }`, { score }, {
      headers: {
        'Authorization': `Bearer ${ getToken() }`,
      },
    });
  }

  public deleteRating(recipeId: number): ApiRequestFnResponse<void> {
    return axiosInstance.delete(`${ url }rating/${ recipeId }`, {
      headers: {
        'Authorization': `Bearer ${ getToken() }`,
      },
    });
  }
}

export const userService = new UserService();
