import React from 'react';
import { CategoriesDrawerProps } from './CategoriesDrawer.types';
import { Stack } from '@mui/material';
import FilterIcon from '@mui/icons-material/FilterAlt';
import { SwipeableDrawer } from 'src/components/drawers/SwipeableDrawer';
import { CategoriesForm } from '@/components/forms/CategoriesForm';

export const CategoriesDrawer: React.FC<CategoriesDrawerProps> = ({ categories }) => {
  return (
    <SwipeableDrawer
      title={ 'Категории' }
      icon={ <FilterIcon /> }
    >
      <Stack
        spacing={ 2 }
        sx={ { width: '100%' } }
      >
        <CategoriesForm categories={ categories } />
      </Stack>
    </SwipeableDrawer>
  );
};
