import { IFiltersData } from '@/api/interfaces/filters.types';
import { SelectedFiltersState } from '@/redux/slices';

export interface FilterProps {
  filter: IFiltersData;
  allFilters: IFiltersData[];
  selectedFilters: SelectedFiltersState;
}
