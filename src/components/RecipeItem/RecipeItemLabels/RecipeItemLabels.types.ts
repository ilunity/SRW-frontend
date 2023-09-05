import { RecipeItemProps } from '@/components/RecipeItem/RecipeItem.types';

export type RecipeItemLabelsProps = Pick<RecipeItemProps, 'recipe' | 'onDelete'>;
