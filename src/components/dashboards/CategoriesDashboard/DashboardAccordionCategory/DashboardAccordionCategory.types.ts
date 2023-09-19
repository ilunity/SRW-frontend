import { ICategory } from '@/api/interfaces/categories.types';

export interface DashboardAccordionCategoryProps {
  categories: ICategory;
  updateCategories: () => void;
}
