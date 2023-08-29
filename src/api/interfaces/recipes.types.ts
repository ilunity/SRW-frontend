import { IUser, USER_ROLE } from '@/utils/types/user';
import { IProduct, MEASUREMENT_TYPE } from '@/utils/types/product';
import { IRecipeStep } from '@/utils/types/recipeStep';
import { IFiltersData } from '@/api/interfaces/filters.types';

export enum RECIPE_STATUS {
  CREATED = 'CREATED',
  MODERATION = 'MODERATION',
  SHARED = 'SHARED',
}

interface RecipeFilter {
  id: number;
  filter: IFiltersData;
}

interface User {
  id: number;
  username: string;
  email: string;
  role: USER_ROLE;
  avatar: string;
}

export interface Comment {
  id: number,
  text: string,
  createdAt: string,
  updatedAt: string,
  userId: number,
  recipeId: number,
}

export type RecipeComment = Omit<Comment, 'userId' | 'recipeId'> & {
  user: User,
}

export interface IRecipeData {
  id: number;
  title: string;
  img: string;
  description: string;
  time: number;
  servings_number: number;
  status: RECIPE_STATUS;
  avg_rating: number | null;
  favourites: number;
  user: IUser;
  comments: RecipeComment[],
  steps: IRecipeStep[];
  filters: RecipeFilter[],
  products: IProduct[];
}

export type IRecipePreview = Omit<IRecipeData, 'steps' | 'filters'> & {
  readonly comments_number: number;
}

export interface IRecipesIds {
  id: number;
}

// DTOs

interface DescriptionDto {
  readonly title: string;
  readonly time: number;
  readonly servings_number: number;
  readonly description: string;
  readonly img: string;
}

interface RecipeProductDto {
  readonly product_id: number;
  readonly measurement_type: MEASUREMENT_TYPE;
  readonly measurement_value: number;
}

interface RecipeStepDto {
  readonly content: string;
  readonly img?: string;
}

interface RecipeFilterDto {
  readonly filter_id: number;
}

export interface CreateRecipeDto {
  readonly description: DescriptionDto;
  readonly ingredients: RecipeProductDto[];
  readonly steps: RecipeStepDto[];
  readonly filters: RecipeFilterDto[];
}

export interface CommentRecipeDto {
  readonly text: string;
}
