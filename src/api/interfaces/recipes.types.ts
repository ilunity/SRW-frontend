import { IUser } from '@/utils/types/user';
import { IProduct, MEASUREMENT_TYPE } from '@/utils/types/product';
import { IRecipeStep } from '@/utils/types/recipeStep';
import { ICategory } from '@/api/interfaces/categories.types';
import { RecipeComment } from '@/api/interfaces/comment.types';

export enum RECIPE_STATUS {
  CREATED = 'CREATED',
  MODERATION = 'MODERATION',
  SHARED = 'SHARED',
}

export interface IRecipeEntity {
  id: number;
  title: string;
  time: number;
  img: string;
  servings_number: number;
  description: string;
  status: RECIPE_STATUS;
  user_id: number;
}

export type IRecipeFull = Omit<IRecipeEntity, 'user_id'> & {
  avg_rating: string | null;
  favourites: string;
  user: IUser;
  comments: RecipeComment[],
  steps: IRecipeStep[];
  categories: ICategory[],
  products: IProduct[];
}

export type IRecipePreview = Omit<IRecipeFull, 'steps' | 'categories' | 'comments'> & {
  readonly comments_number: string;
}

// DTOs

interface RecipeProductDto {
  readonly product_id: number;
  readonly measurement_type: MEASUREMENT_TYPE;
  readonly measurement_value: number;
}

interface RecipeStepDto {
  readonly content: string;
  readonly img?: string;
}

export interface CreateRecipeDto {
  readonly title: string;
  readonly time: number;
  readonly servings_number: number;
  readonly description: string;
  readonly img: string;
  readonly ingredients: RecipeProductDto[];
  readonly steps: RecipeStepDto[];
  readonly categories: number[];
}

export interface CommentRecipeDto {
  readonly text: string;
}


export enum RECIPE_BELONGING {
  MY = 'MY',
  FAVOURITE = 'FAVOURITE',
}

export interface GetRecipePreviewDto {
  categories?: number[];
  status?: `${ RECIPE_STATUS }`;
  belongTo?: `${ RECIPE_BELONGING }`;
}


// FavouriteRecipe

export interface IFavouriteRecipe {
  id: number;
  recipe_id: number;
  user_id: number;
}

// Rating

export interface IRating {
  id: number,
  score: number,
  user_id: number,
  recipe_id: number
}
