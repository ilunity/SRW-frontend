import React from 'react';
import { RecipeStatusLabelProps } from './RecipeStatusLabel.types';
import { Typography } from '@mui/material';
import { LabelLayout } from '@/components/labels/LabelLayout';
import { getRecipeStatusText } from '@/utils';
import { RECIPE_STATUS } from '@/api/interfaces/recipes.types';
import VerifiedIcon from '@mui/icons-material/Verified';
import PolicyIcon from '@mui/icons-material/Policy';

export const RecipeStatusLabel: React.FC<RecipeStatusLabelProps> = ({ status, expanded = false, size }) => {
  if (expanded) {
    return (
      <Typography color={ 'primary' } display={ 'inline-block' }>
        [{ getRecipeStatusText(status).toUpperCase() }]
      </Typography>
    );
  }

  const icon = status === RECIPE_STATUS.SHARED
    ? <VerifiedIcon />
    : <PolicyIcon />;

  return (
    <LabelLayout
      text={ `` }
      icon={ icon }
      size={ size }
      color={ 'primary' }
    />
  );
};
