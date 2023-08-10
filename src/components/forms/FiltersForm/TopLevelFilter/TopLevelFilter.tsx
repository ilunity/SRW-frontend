import React from 'react';
import { TopLevelFilterProps } from './TopLevelFilter.types';
import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import { FilterCheckbox } from '@/components/forms/FiltersForm/FilterCheckbox';
import { Filter } from '@/components/forms/FiltersForm/Filter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { checkIsIndeterminate, checkIsSelected } from '@/components/forms/FiltersForm/utils';

export const TopLevelFilter: React.FC<TopLevelFilterProps> = (
  {
    filter,
    allFilters,
    selectedFilters,
    onChange,
  }) => {
  const isSelected = checkIsSelected(filter, selectedFilters);
  const isIndeterminate = checkIsIndeterminate(filter, selectedFilters);

  return (
    <Accordion key={ filter.id } disableGutters>
      <AccordionSummary
        sx={ { '& .MuiAccordionSummary-content': { m: 0 } } }
        expandIcon={ <ExpandMoreIcon /> }
      >
        <FilterCheckbox
          label={ filter.name }
          level={ filter.level }
          isSelected={ isSelected }
          isIndeterminate={ isIndeterminate }
          onChange={ onChange }
        />
      </AccordionSummary>
      <Divider />
      <AccordionDetails sx={ { p: 1 } }>
        { filter.children.map(childFilter => (
          <Filter
            key={ childFilter.id }
            filter={ childFilter }
            selectedFilters={ selectedFilters }
            allFilters={ allFilters }
          />
        )) }
      </AccordionDetails>
    </Accordion>
  );
};
