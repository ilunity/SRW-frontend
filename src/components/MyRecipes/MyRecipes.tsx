import React from 'react';
import { MyRecipesProps } from './MyRecipes.types';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { RecipeItem } from '@/components/MyRecipes/RecipeItem';
import { CreateRecipeBtn } from '@/components/icon-buttons/CreateRecipeBtn';

export const MyRecipes: React.FC<MyRecipesProps> = ({ recipes }) => {
  return (
    <Card sx={ { borderRadius: 4 } }>
      <CardHeader
        title={ 'Мои рецепты:' }
        action={ <CreateRecipeBtn /> }
      />
      <CardContent>
        <Stack spacing={ 2 }>
          { recipes.map(recipe => (<RecipeItem key={ recipe.id } recipe={ recipe } />)) }
        </Stack>
      </CardContent>
    </Card>
  );
};
