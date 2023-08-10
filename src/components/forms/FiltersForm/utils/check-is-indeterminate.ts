import { IFiltersData } from '@/api/interfaces/filters.types';
import { SelectedFiltersState } from '@/redux/slices';
import { getSelectedChildrenCount } from '@/components/forms/FiltersForm/utils/get-selected-children-count';

export const checkIsIndeterminate = (filter: IFiltersData, selectedFilters: SelectedFiltersState) => {
  const selectedChildrenCount = getSelectedChildrenCount(filter, selectedFilters);
  return selectedChildrenCount > 0 && selectedChildrenCount < filter.children.length;
};
