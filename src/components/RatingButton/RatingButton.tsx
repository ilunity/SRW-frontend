import React, { useState } from 'react';
import { RatingButtonProps } from './RatingButton.types';
import { Rating } from '@mui/material';
import { IApiError } from '@/api/utils/api.types';
import { executeRequest, stringifyErrorMessage, useApiRequest } from '@/api/utils';
import { userService } from '@/api/services';
import { AlertSnackbar } from '@/components/AlertSnackbar';

export const RatingButton: React.FC<RatingButtonProps> = ({ recipeId }) => {
  const [updateButtonCounter, setUpdateButtonCounter] = useState<number>(0);
  const [error, setError] = useState<IApiError | null>(null);

  const { data: rating } = useApiRequest(
    async () => await userService.getRating(recipeId),
    [updateButtonCounter],
  );

  const handleUpdateRating = async (score: number | null) => {
    if (score === 0 || score === null) {
      return handleRemoveRating();
    }

    const updateFunction = rating ? userService.updateRatingScore : userService.rateRecipe;
    const { error } = await executeRequest(() => updateFunction(recipeId, score));

    if (error) {
      return setError(error);
    }
    setUpdateButtonCounter(prevState => prevState + 1);
  };

  const handleRemoveRating = async () => {
    const { error } = await executeRequest(() => userService.deleteRating(recipeId));

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
      <Rating
        size={ 'large' }
        value={ rating?.score || 0 }
        onChange={ (event, newValue) => {
          // console.log(newValue);
          handleUpdateRating(newValue);
        } }
      />
    </>
  );
};
