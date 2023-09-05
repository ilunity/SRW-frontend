import React from 'react';
import { IngredientsDrawerProps } from './IngredientsDrawer.types';
import { Stack } from '@mui/material';
import { SwipeableDrawer } from '@/components/drawers/SwipeableDrawer';
import FridgeIcon from '@mui/icons-material/Kitchen';
import { Ingredients } from '@/components/Ingredients';


export const IngredientsDrawer: React.FC<IngredientsDrawerProps> = ({ recipeProducts }) => {
  return (
    <SwipeableDrawer icon={ <FridgeIcon /> }>
      <Stack
        spacing={ 2 }
        sx={ { width: '100%' } }
      >
        <Ingredients recipeProducts={ recipeProducts } />
      </Stack>
    </SwipeableDrawer>
  );
};
