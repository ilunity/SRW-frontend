import React, { useEffect } from 'react';
import { FilterProps } from './Filter.types';
import { Box } from '@mui/material';
import { addFilter, deleteFilter } from '@/redux/slices';
import { useDispatch } from 'react-redux';
import { FilterCheckbox } from '@/components/forms/FiltersForm/FilterCheckbox';
import { checkIsIndeterminate, checkIsSelected, getSelectedChildrenCount } from '@/components/forms/FiltersForm/utils';
import { TopLevelFilter } from '@/components/forms/FiltersForm/TopLevelFilter';

export const Filter: React.FC<FilterProps> = (
  {
    filter,
    allFilters,
    selectedFilters,
  }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    if (checkIsSelected(filter, selectedFilters)) {
      return dispatch(deleteFilter({ filters: allFilters, filterToDelete: filter }));
    }

    dispatch(addFilter(filter));
  };

  useEffect(() => {
    const selectedChildrenCount = getSelectedChildrenCount(filter, selectedFilters);
    const isAllChildrenSelected = selectedChildrenCount === filter.children.length;
    const isSelected = checkIsSelected(filter, selectedFilters);

    if (!isSelected && isAllChildrenSelected) {
      dispatch(addFilter(filter));
    }
  }, [selectedFilters]);


  if (filter.level === 0) {
    return (
      <TopLevelFilter
        filter={ filter }
        allFilters={ allFilters }
        selectedFilters={ selectedFilters }
        onChange={ handleChange }
      />
    );
  }

  return (
    <>
      <FilterCheckbox
        label={ filter.name }
        level={ filter.level }
        isSelected={ checkIsSelected(filter, selectedFilters) }
        isIndeterminate={ checkIsIndeterminate(filter, selectedFilters) }
        onChange={ handleChange }
      />
      <Box sx={ { my: 1 } }>
        { filter.children.map(childFilter => (
          <Filter
            key={ childFilter.id }
            filter={ childFilter }
            allFilters={ allFilters }
            selectedFilters={ selectedFilters }
          />
        )) }
      </Box>
    </>
  );
};
