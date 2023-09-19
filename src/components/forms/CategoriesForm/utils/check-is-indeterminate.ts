import { ICategory } from '@/api/interfaces/categories.types';
import { SelectedCategoriesState } from '@/redux/slices';
import { getSelectedChildrenCount } from '@/components/forms/CategoriesForm/utils/get-selected-children-count';

export const checkIsIndeterminate = (category: ICategory, selectedCategories: SelectedCategoriesState) => {
  const selectedChildrenCount = getSelectedChildrenCount(category, selectedCategories);
  return selectedChildrenCount > 0 && selectedChildrenCount < category.children.length;
};
