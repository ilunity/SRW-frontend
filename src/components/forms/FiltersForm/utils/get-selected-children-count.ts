import { IFiltersData } from '@/api/interfaces/filters.types';
import { checkIsSelected } from '@/components/forms/FiltersForm/utils/check-is-selected';
import { SelectedFiltersState } from '@/redux/slices';

export const getSelectedChildrenCount = (filter: IFiltersData, selectedFilters: SelectedFiltersState) => {
  if (filter.children.length === 0) {
    return -1;
  }

  let count = 0;
  for (const child of filter.children) {
    if (checkIsSelected(child, selectedFilters)) {
      count++;
    }
  }

  return count;
};
