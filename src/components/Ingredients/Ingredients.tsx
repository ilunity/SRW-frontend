import React from 'react';
import { IngredientsProps } from './Ingredients.types';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { Ingredient } from '@/components/Ingredients/Ingredient';

export const Ingredients: React.FC<IngredientsProps> = ({ recipeProducts }) => {
  return (
    <Card
      sx={ {
        borderRadius: 3,
        maxHeight: 'inherit',
      } }
    >
      <CardHeader title={ 'Ингредиенты:' } />
      <CardContent
        sx={ {
          maxHeight: 'inherit',
          overflowY: 'auto',
        } }
      >
        <Stack
          component={ 'ul' }
          spacing={ 1 }
        >
          { recipeProducts.map(recipeProduct => (
            <Ingredient key={ recipeProduct.id } recipeProduct={ recipeProduct } />
          )) }
        </Stack>
      </CardContent>
    </Card>
  );
};
