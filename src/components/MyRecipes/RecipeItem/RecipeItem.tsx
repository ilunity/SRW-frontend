import React from 'react';
import { RecipeItemProps } from './RecipeItem.types';
import { Paper, Stack, Typography } from '@mui/material';
import { RatingLabel } from '@/components/labels/RatingLabel';
import { FavoritesLabel } from '@/components/labels/FavoritesLabel';
import { RowContainer } from 'src/components/RowContainer';
import { CommentLabel } from '@/components/labels/CommentLabel';
import Link from 'next/link';
import { getRecipeStatusText } from '@/utils';

export const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <Link href={ `/recipes/${ recipe.id }` }>
      <Paper
        variant={ 'outlined' }
        sx={ {
          p: 1,
          borderRadius: 3,
          '&:hover': { background: theme => theme.palette.action.hover },
          cursor: 'pointer',
        } }
      >
        <Stack
          direction={ 'row' }
          spacing={ 2 }
          sx={ { alignItems: 'center' } }
        >
          <Typography variant={ 'h6' } sx={ { minWidth: 150 } }>
            { recipe.title }
          </Typography>
          <Typography
            color={ 'primary' }
            sx={ { flex: '1 0 auto' } }
          >
            [{ getRecipeStatusText(recipe.status).toUpperCase() }]
          </Typography>
          <RowContainer>
            { recipe.avg_rating &&
              <RatingLabel value={ recipe.avg_rating } />
            }
            <FavoritesLabel count={ recipe.favourites } />
            <CommentLabel value={ recipe.comments_number } />
          </RowContainer>
        </Stack>
      </Paper>
    </Link>
  );
};
