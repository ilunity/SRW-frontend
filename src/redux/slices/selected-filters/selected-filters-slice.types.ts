import { IFiltersData } from '@/api/interfaces/filters.types';

export type SelectedFilter = Pick<IFiltersData, 'id' | 'parent_id' | 'left_key' | 'right_key'>;

export type SelectedFiltersState = SelectedFilter[];

export interface IDeleteFilter {
  filterToDelete: SelectedFilter;
  filters: IFiltersData[];
}
