import { LabelLayoutProps } from '@/components/labels/LabelLayout/LabelLayout.types';
import { RECIPE_STATUS } from '@/api/interfaces/recipes.types';

export type RecipeStatusLabelProps = Pick<LabelLayoutProps, 'size'> & {
  status: RECIPE_STATUS;
  expanded?: boolean;
}
