import React from 'react';
import { ResponsiveRecipeIngredientsProps } from './ResponsiveRecipeIngredients.types';
import { Box, useMediaQuery } from '@mui/material';
import { Ingredients } from '@/components/Ingredients';
import { IngredientsDrawer } from '@/components/drawers/IngredientsDrawer';
import { Theme } from '@mui/system';

export const ResponsiveRecipeIngredients: React.FC<ResponsiveRecipeIngredientsProps> = ({ recipeProducts }) => {
  const mediaQueryMd: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  if (mediaQueryMd) {
    return (
      <Box
        sx={ {
          position: 'sticky',
          top: theme => theme.spacing(12),
          maxHeight: theme => `calc(100vh - ${ theme.spacing(16) })`,
          width: {
            xs: '100%',
            md: '35%',
          },
        } }
      >
        <Ingredients recipeProducts={ recipeProducts } />
      </Box>
    );
  }

  return (<IngredientsDrawer recipeProducts={ recipeProducts } />);
};
