import React from 'react';
import { RecipeCardProps } from './RecipeCard.types';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { RowContainer } from 'src/components/RowContainer';
import { RatingLabel, TimeLabel } from '@/components/labels';
import { FavoritesLabel } from '@/components/labels/FavoritesLabel';
import { IngredientsMenu } from '@/components/IngredientsMenu';
import Link from 'next/link';
import { CommentLabel } from '@/components/labels/CommentLabel';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, variant = 'horizontal' }) => {
  const isVertical = variant === 'vertical';
  const labelSize = isVertical ? 'small' : 'medium';

  return (
    <Card
      sx={ {
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        height: isVertical ? 'auto' : '200px',
        maxWidth: isVertical ? '350px' : '600px',
        width: '100%',
        flexGrow: 1,
      } }
    >
      <Link href={ '/recipes/[recipeId]' } as={ `/recipes/${ recipe.id }` }>
        <CardMedia
          component='img'
          sx={ {
            width: isVertical ? '100%' : '300px',
            height: isVertical ? '180px' : '100%',
          } }
          image={ HOST + recipe.img }
          alt={ recipe.title }
        />
      </Link>
      <CardContent
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          '&.MuiCardContent-root': { p: isVertical ? '1' : '2' },
        } }
      >
        <Box>
          <Link href={ '/recipes/[recipeId]' } as={ `/recipes/${ recipe.id }` }>
            <Typography variant='h6' component='h3' maxHeight={ 66 } overflow={ 'hidden' }>
              { recipe.title }
            </Typography>
          </Link>
          <IngredientsMenu products={ recipe.products } />
        </Box>
        <Box sx={ { mt: 'auto' } }>
          { !isVertical && recipe.avg_rating && <RatingLabel value={ +recipe.avg_rating } expanded /> }
          <RowContainer>
            <TimeLabel time={ recipe.time } size={ labelSize } />
            { recipe.favourites !== '0' && <FavoritesLabel count={ recipe.favourites } size={ labelSize } /> }
            { recipe.comments_number !== '0' && <CommentLabel value={ recipe.comments_number } size={ labelSize } /> }
            { isVertical && recipe.avg_rating &&
              <RatingLabel value={ +recipe.avg_rating } size={ labelSize } /> }
          </RowContainer>
        </Box>
      </CardContent>
    </Card>
  );
};
