import { ICategory } from '@/api/interfaces/categories.types';
import { SelectedCategoriesState } from '@/redux/slices';

export interface CategoryProps {
  category: ICategory;
  allCategories: ICategory[];
  selectedCategories: SelectedCategoriesState;
}
