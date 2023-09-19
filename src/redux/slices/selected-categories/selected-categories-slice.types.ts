import { ICategory } from '@/api/interfaces/categories.types';

export type SelectedCategory = Pick<ICategory, 'id' | 'parent_id' | 'left_key' | 'right_key'>;

export type SelectedCategoriesState = SelectedCategory[];

export interface IDeleteCategory {
  categoryToDelete: SelectedCategory;
  categories: ICategory[];
}
