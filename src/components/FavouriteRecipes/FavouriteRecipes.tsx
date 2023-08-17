import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { RecipeItem } from '@/components/MyRecipes/RecipeItem';
import { executeRequest, stringifyErrorMessage, useApiRequest } from '@/api/utils';
import { recipesService, userService } from '@/api/services';
import { AlertSnackbar } from '@/components/AlertSnackbar';
import { IApiError } from '@/api/utils/api.types';

export const FavouriteRecipes: React.FC = () => {
  const [updateButtonCounter, setUpdateButtonCounter] = useState<number>(0);
  const [error, setError] = useState<IApiError | null>(null);

  const { data: favouriteRecipes } = useApiRequest(recipesService.getAllFavouriteRecipes, [updateButtonCounter]);

  const handleRemoveFavourite = async (recipeId: number) => {
    const { error } = await executeRequest(() => userService.deleteFavouriteRecipe(recipeId));

    if (error) {
      return setError(error);
    }

    setUpdateButtonCounter(prevState => prevState + 1);
  };

  return (
    <>
      <AlertSnackbar
        isOpen={ error !== null }
        severity={ 'error' }
        setIsOpen={ () => setError(null) }
        content={ error ? stringifyErrorMessage(error) : '' }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center',
        } }
        autoHideDuration={ 3000 }
      />
      { favouriteRecipes &&
        <Card sx={ { borderRadius: 4 } }>
          <CardHeader title={ 'Избранные:' } />
          <CardContent>
            <Stack spacing={ 2 }>
              { favouriteRecipes.map(recipe => (
                <RecipeItem
                  key={ recipe.id }
                  recipe={ recipe }
                  onDelete={ () => handleRemoveFavourite(recipe.id) }
                />
              )) }
            </Stack>
          </CardContent>
        </Card>
      }
    </>
  );
};
