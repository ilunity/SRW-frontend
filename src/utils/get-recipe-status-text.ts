import { RECIPE_STATUS } from '@/api/interfaces/recipes.types';

const STATUS_TO_TEXT = {
  [RECIPE_STATUS['SHARED']]: 'Опубликован',
  [RECIPE_STATUS['MODERATION']]: 'В модерации',
  [RECIPE_STATUS['CREATED']]: 'В модерации',
};

export const getRecipeStatusText = (status: RECIPE_STATUS) => {
  return STATUS_TO_TEXT[status];
};
