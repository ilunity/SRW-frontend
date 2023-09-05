import React from 'react';
import { IngredientProps } from './Ingredient.types';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { getProductWithMeasurementSign } from '@/utils';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const Ingredient: React.FC<IngredientProps> = ({ recipeProduct }) => {
  return (
    <Paper
      component={ 'li' }
      key={ recipeProduct.id }
      variant={ 'outlined' }
      sx={ { p: 1 } }
    >
      <Stack
        direction={ 'row' }
        sx={ { alignItems: 'center' } }
      >
        <Avatar
          alt={ `Картинка ${ recipeProduct.product.name }` }
          src={ HOST + recipeProduct.product.img }
          variant={ 'rounded' }
          sx={ {
            width: 24,
            height: 24,
            mr: 2,
          } }
        >
          { recipeProduct.product.name[0].toUpperCase() }
        </Avatar>
        <Typography
          sx={ {
            flex: '1 0 0',
            mr: 2,
          } }
          variant={ 'body1' }
        >
          { recipeProduct.product.name }
        </Typography>
        <Typography color={ 'text.secondary' }>
          { getProductWithMeasurementSign(
            recipeProduct.measurement_value,
            recipeProduct.measurement_type,
          ) }
        </Typography>
      </Stack>
    </Paper>
  );
};
