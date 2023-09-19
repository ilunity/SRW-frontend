import { ICategory } from '@/api/interfaces/categories.types';
import { SelectedCategoriesState } from '@/redux/slices';

export const checkIsSelected = (category: ICategory, selectedCategories: SelectedCategoriesState) => {
  return !!selectedCategories.find(({ left_key, right_key }) =>
    left_key <= category.left_key && right_key >= category.right_key,
  );
};
