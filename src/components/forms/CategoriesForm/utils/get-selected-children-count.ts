import { ICategory } from '@/api/interfaces/categories.types';
import { checkIsSelected } from '@/components/forms/CategoriesForm/utils/check-is-selected';
import { SelectedCategoriesState } from '@/redux/slices';

export const getSelectedChildrenCount = (category: ICategory, selectedCategories: SelectedCategoriesState) => {
  if (category.children.length === 0) {
    return -1;
  }

  let count = 0;
  for (const child of category.children) {
    if (checkIsSelected(child, selectedCategories)) {
      count++;
    }
  }

  return count;
};
