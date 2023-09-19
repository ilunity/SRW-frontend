import { IRecipeFull, IUser } from '@/utils/types';

export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  recipe: IRecipeFull;
}

export type RecipeComment = Omit<Comment, 'recipe'>

export type UserComment = Omit<Comment, 'user'>
