import React from 'react';
import { FiltersDrawerProps } from './FiltersDrawer.types';
import { Stack } from '@mui/material';
import FilterIcon from '@mui/icons-material/FilterAlt';
import { SwipeableDrawer } from 'src/components/drawers/SwipeableDrawer';
import { FiltersForm } from '@/components/forms/FiltersForm';

export const FiltersDrawer: React.FC<FiltersDrawerProps> = ({ filters }) => {
  return (
    <SwipeableDrawer
      title={ 'Фильтры' }
      icon={ <FilterIcon /> }
    >
      <Stack
        spacing={ 2 }
        sx={ { width: '100%' } }
      >
        <FiltersForm filters={ filters } />
      </Stack>
    </SwipeableDrawer>
  );
};
