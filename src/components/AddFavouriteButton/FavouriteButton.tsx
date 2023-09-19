import React, { useState } from 'react';
import { FavouriteButtonProps } from './FavouriteButton.types';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { executeRequest, stringifyErrorMessage, useApiRequest } from '@/api/utils';
import { recipesService } from '@/api/services';
import ClearIcon from '@mui/icons-material/Clear';
import { AlertSnackbar } from '@/components/AlertSnackbar';
import { IApiError } from '@/api/utils/api.types';

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({ recipeId }) => {
  const [updateButtonCounter, setUpdateButtonCounter] = useState<number>(0);
  const [error, setError] = useState<IApiError | null>(null);

  const { data: isFavouriteRecipe, status } = useApiRequest(
    async () => await recipesService.isFavourite(recipeId),
    { deps: [updateButtonCounter] },
  );

  const handleAddFavourite = async () => {
    const { error } = await executeRequest(() => recipesService.addFavourite(recipeId));

    if (error) {
      return setError(error);
    }
    setUpdateButtonCounter(prevState => prevState + 1);
  };

  const handleRemoveFavourite = async () => {
    const { error } = await executeRequest(() => recipesService.deleteFavourite(recipeId));

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
      { status === 'success' && isFavouriteRecipe
        ? (
          <Button
            variant={ 'outlined' }
            endIcon={ <ClearIcon /> }
            onClick={ handleRemoveFavourite }
          >
            В избранном
          </Button>)
        : (
          <Button
            variant={ 'contained' }
            endIcon={ <FavoriteIcon sx={ { color: red['500'] } } /> }
            onClick={ handleAddFavourite }
          >
            В избранное
          </Button>)
      }
    </>
  );
};
