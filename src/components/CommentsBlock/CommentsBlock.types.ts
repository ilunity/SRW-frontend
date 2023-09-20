import { RecipeComment } from '@/api/interfaces/comment.types';

export interface CommentsBlockProps {
  comments: RecipeComment[];
  recipeId: number;
}
