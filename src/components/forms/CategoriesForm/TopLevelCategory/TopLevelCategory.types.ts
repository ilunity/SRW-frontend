import { ICategory } from '@/api/interfaces/categories.types';
import { SelectedCategoriesState } from '@/redux/slices';

export interface TopLevelCategoryProps {
  category: ICategory;
  allCategories: ICategory[];
  selectedCategories: SelectedCategoriesState;
  onChange: () => void;
}
