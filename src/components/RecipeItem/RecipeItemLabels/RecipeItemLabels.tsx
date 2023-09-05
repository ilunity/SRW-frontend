import React from 'react';
import { RecipeItemLabelsProps } from './RecipeItemLabels.types';
import { CommentLabel, FavoritesLabel, RatingLabel } from '@/components/labels';
import { DeleteBtn } from '@/components/icon-buttons/DeleteBtn';
import { RowContainer } from '@/components/RowContainer';
import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/system';

export const RecipeItemLabels: React.FC<RecipeItemLabelsProps> = ({ recipe, onDelete }) => {
  const mediaQuerySm: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const labelSize = mediaQuerySm ? 'medium' : 'small';

  return (
    <RowContainer>
      { recipe.avg_rating && <RatingLabel value={ +recipe.avg_rating } size={ labelSize } /> }
      { recipe.favourites !== '0' && <FavoritesLabel count={ recipe.favourites } size={ labelSize } /> }
      { recipe.comments_number !== '0' && <CommentLabel value={ recipe.comments_number } size={ labelSize } /> }
      { onDelete &&
        <DeleteBtn
          title={ 'Удалить' }
          onClick={ (event) => {
            event.preventDefault();
            onDelete(recipe.id);
          } }
          size={ 'small' }
          wrapperSx={ {
            zIndex: 1000,
          } }
        />
      }
    </RowContainer>
  );
};
