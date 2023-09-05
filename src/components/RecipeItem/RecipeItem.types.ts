import { IRecipePreview } from '@/api/interfaces/recipes.types';

export interface RecipeItemProps {
  recipe: IRecipePreview;
  onDelete?: (recipeId: number) => void;
  showStatus?: boolean;
}
