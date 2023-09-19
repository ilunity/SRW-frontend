import React from 'react';
import { MyRecipesProps } from './MyRecipes.types';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { RecipeItem } from 'src/components/RecipeItem';
import { CreateRecipeBtn } from '@/components/icon-buttons/CreateRecipeBtn';
import { useApiRequest } from '@/api/utils';
import { recipesService } from '@/api/services';
import { RECIPE_BELONGING } from '@/api/interfaces/recipes.types';

export const MyRecipes: React.FC<MyRecipesProps> = ({ user }) => {
  const { data: recipes } = useApiRequest(() => recipesService.getPreview(
      { belongTo: RECIPE_BELONGING.MY }),
    {
      deps: [user],
      condition: !!user,
    },
  );

  return (
    <Card sx={ { borderRadius: 4 } }>
      <CardHeader
        title={ 'Мои рецепты:' }
        action={ <CreateRecipeBtn /> }
      />
      { recipes &&
        <CardContent>
          <Stack spacing={ 2 }>
            { recipes.map(recipe => (
                <RecipeItem
                  key={ recipe.id }
                  recipe={ recipe }
                  showStatus
                />
              ),
            ) }
          </Stack>
        </CardContent>
      }
    </Card>
  );
};
