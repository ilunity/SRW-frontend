import React from 'react';
import { RecipesGridProps } from './RecipesGrid.types';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { RecipeCard } from '@/components/RecipeCard';
import { Theme } from '@mui/system';

export const RecipesGrid: React.FC<RecipesGridProps> = ({ recipes }) => {
  const mediaQueryLg: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <Grid
      container
      rowSpacing={ {
        xs: 2,
        sm: 4,
      } }
      columnSpacing={ {
        xs: 0,
        sm: 2,
      } }
      sx={ {
        '&.MuiGrid-root': {
          mt: {
            xs: -2,
            sm: -4,
          },
        },
      } }
    >
      { recipes.length === 0
        ? (<Typography>Рецептов не найдено</Typography>)
        : recipes.map(recipe => (
          <Grid
            item
            key={ recipe.id }
            xs={ 12 }
            sm={ 6 }
            md={ 4 }
            lg={ 12 }
            sx={ {
              display: {
                xs: 'flex',
                lg: 'block',
              },
              justifyContent: 'center',
            } }
          >
            <RecipeCard
              recipe={ recipe }
              variant={ mediaQueryLg ? 'horizontal' : 'vertical' }
            />
          </Grid>
        )) }
    </Grid>
  );
};
