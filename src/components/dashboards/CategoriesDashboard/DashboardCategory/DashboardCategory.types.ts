import { ICategory } from '@/api/interfaces/categories.types';

export interface DashboardCategoryProps {
  category: ICategory;
  updateCategories: () => void;
}
