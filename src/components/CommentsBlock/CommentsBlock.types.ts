import { RecipeComment } from '@/api/interfaces/recipes.types';

export interface CommentsBlockProps {
  comments: RecipeComment[];
  recipeId: number;
}
