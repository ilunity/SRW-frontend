import React from 'react';
import { RecipeItemTitleProps } from './RecipeItemTitle.types';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { RecipeStatusLabel } from '@/components/labels/RecipeStatusLabel';
import { Theme } from '@mui/system';

export const RecipeItemTitle: React.FC<RecipeItemTitleProps> = ({ recipe, showStatus }) => {
  const mediaQuerySm: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const labelSize = mediaQuerySm ? 'medium' : 'small';

  return (
    <Stack
      sx={ {
        flexGrow: 1,
        width: {
          xs: '100%',
          md: 500,
        },
      } }
      spacing={ 1 }
      direction={ 'row' }
      alignItems={ 'center' }
    >
      <Typography
        variant={ 'h6' }
        maxWidth={ '100%' }
        display={ 'inline-block' }
        noWrap
      >
        { recipe.title }
      </Typography>
      { showStatus && (
        <RecipeStatusLabel
          status={ recipe.status }
          size={ labelSize }
          expanded={ mediaQuerySm }
        />
      ) }
    </Stack>
  );
};
