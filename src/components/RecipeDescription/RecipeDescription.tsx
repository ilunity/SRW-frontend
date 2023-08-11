import React from 'react';
import { RecipeDescriptionProps } from './RecipeDescription.types';
import { Typography } from '@mui/material';

export const RecipeDescription: React.FC<RecipeDescriptionProps> = ({ description }) => {
  return (
    <>
      <Typography variant={ 'h5' } gutterBottom>
        Описание:
      </Typography>
      <Typography variant={ 'h6' }>
        { description }
      </Typography>
    </>
  );
};
