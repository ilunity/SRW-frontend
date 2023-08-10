import { IFiltersData } from '@/api/interfaces/filters.types';
import { SelectedFiltersState } from '@/redux/slices';

export const checkIsSelected = (filter: IFiltersData, selectedFilters: SelectedFiltersState) => {
  return !!selectedFilters.find(({left_key,right_key}) =>
    left_key <= filter.left_key && right_key >= filter.right_key,
  );
};
