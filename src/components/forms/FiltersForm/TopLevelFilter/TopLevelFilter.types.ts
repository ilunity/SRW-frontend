import { IFiltersData } from '@/api/interfaces/filters.types';
import { SelectedFiltersState } from '@/redux/slices';

export interface TopLevelFilterProps {
  filter: IFiltersData;
  allFilters: IFiltersData[];
  selectedFilters: SelectedFiltersState;
  onChange: () => void;
}
