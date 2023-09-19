import { ICategory } from '@/api/interfaces/categories.types';

export interface DashboardCategoryItemProps {
  category: ICategory;
  updateCategories: () => void;
}
