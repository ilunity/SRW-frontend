import { IRecipePreview } from '@/utils/types';

export interface RecipeCardProps {
  variant?: 'horizontal' | 'vertical';
  recipe: IRecipePreview;
}
