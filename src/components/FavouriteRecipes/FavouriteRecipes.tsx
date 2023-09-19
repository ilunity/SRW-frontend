import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { RecipeItem } from 'src/components/RecipeItem';
import { useApiRequest } from '@/api/utils';
import { recipesService } from '@/api/services';
import { ErrorAlert, useErrorAlertController } from '@/components/ErrorAlert';
import { RECIPE_BELONGING } from '@/api/interfaces/recipes.types';

export const FavouriteRecipes: React.FC = () => {
  const [updateButtonCounter, setUpdateButtonCounter] = useState<number>(0);
  const { data: favouriteRecipes } = useApiRequest(
    () => recipesService.getPreview({ belongTo: RECIPE_BELONGING.FAVOURITE }),
    { deps: [updateButtonCounter] },
  );

  const {
    errorAlertState,
    submitHandler: deleteFavouriteRecipeHandler,
  } = useErrorAlertController({
    requestFn: (recipeId: number) =>
      () => recipesService.deleteFavourite(recipeId),
    onSuccess: () => setUpdateButtonCounter(prevState => prevState + 1),
  });

  return (
    <>
      <ErrorAlert errorAlertState={ errorAlertState } />
      { favouriteRecipes &&
        <Card sx={ { borderRadius: 4 } }>
          <CardHeader title={ 'Избранные:' } />
          <CardContent>
            <Stack spacing={ 2 }>
              { favouriteRecipes.map(recipe => (
                <RecipeItem
                  key={ recipe.id }
                  recipe={ recipe }
                  onDelete={ deleteFavouriteRecipeHandler }
                />
              )) }
            </Stack>
          </CardContent>
        </Card>
      }
    </>
  );
};
