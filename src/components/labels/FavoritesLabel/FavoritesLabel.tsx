import React from 'react';
import { FavoritesLabelProps } from './FavoritesLabel.types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { LabelLayout } from '@/components/labels/LabelLayout';
import { red } from '@mui/material/colors';

export const FavoritesLabel: React.FC<FavoritesLabelProps> = ({ count, size }) => {
  return (
    <LabelLayout
      text={ `${ count }` }
      icon={ <FavoriteIcon sx={ { color: red['500'] } } /> }
      size={ size }
    />
  );
};
