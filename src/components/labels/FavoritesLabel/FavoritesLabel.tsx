import React from 'react';
import { FavoritesLabelProps } from './FavoritesLabel.types';
import { Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

export const FavoritesLabel: React.FC<FavoritesLabelProps> = ({ count }) => {
  return (
    <Stack direction={ 'row' } spacing={ 1 }>
      <FavoriteIcon sx={ { color: red['500'] } } />
      <Typography>
        { count }
      </Typography>
    </Stack>
  );
};
