import React from 'react';
import { RecipeCardProps } from './RecipeCard.types';
import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { RowContainer } from 'src/components/RowContainer';
import { TimeLabel } from '@/components/labels';
import { FavoritesLabel } from '@/components/labels/FavoritesLabel';
import { IngredientsMenu } from '@/components/IngredientsMenu';
import Link from 'next/link';
import { CommentLabel } from '@/components/labels/CommentLabel';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card
      sx={ {
        display: 'flex',
        height: 200,
        width: 600,
      } }
    >
      <Link href={ `/recipes/${ recipe.id }` }>
        <CardMedia
          component='img'
          sx={ { width: 300 } }
          image={ HOST + recipe.img }
          alt={ recipe.title }
        />
      </Link>
      <CardContent
        sx={ {
          width: 300,
          display: 'flex',
          flexDirection: 'column',
        } }
      >
        <Box>
          <Link href={ `/recipes/${ recipe.id }` }>
            <Typography variant='h6' component='h3' maxHeight={ 66 } overflow={ 'hidden' }>
              { recipe.title }
            </Typography>
          </Link>
          <IngredientsMenu products={ recipe.products } />
        </Box>
        <Box sx={ { mt: 'auto' } }>
          <Rating
            readOnly
            value={ recipe.avg_rating ? Math.round(recipe.avg_rating * 2) / 2 : null }
            precision={ 0.5 }
            sx={ { mt: 'auto' } }
          />
          <RowContainer>
            <TimeLabel time={ recipe.time } />
            <FavoritesLabel count={ recipe.favourites } />
            <CommentLabel value={ recipe.comments_number } />
          </RowContainer>
        </Box>
      </CardContent>
    </Card>
  );
};
