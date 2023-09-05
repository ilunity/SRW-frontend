import React from 'react';
import { RecipeHeadingProps } from './RecipeHeading.types';
import { Card, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material';
import { RecipeDescription } from '@/components/RecipeDescription';
import { UserInfo } from '@/components/UserInfo';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const RecipeHeading: React.FC<RecipeHeadingProps> = ({ recipe }) => {
  return (
    <Card sx={ { borderRadius: 3, width: '100%' } }>
      <CardHeader
        title={
          <Stack
            direction={ {
              xs: 'column',
              sm: 'row',
            } }
            sx={ {
              justifyContent: 'space-between',
              alignItems: {
                xs: 'flex-start',
                sm: 'center',
              },
            } }
          >
            <Typography
              variant={ 'h4' }
              component={ 'h1' }
              sx={ { mr: 2 } }
            >
              { recipe.title }
            </Typography>
            <UserInfo
              user={ recipe.user }
              tooltip={ recipe.user.username }
            />
          </Stack>
        }
      />
      <CardContent>
        <CardMedia
          component={ 'img' }
          src={ HOST + recipe.img }
          alt={ 'Фотография приготовленного блюда' }
          sx={ {
            mx: 'auto',
            mb: 2,
            borderRadius: 2,
            height: {
              xs: 200,
              sm: 300,
              md: 350,
            },
            maxWidth: {
              xs: 400,
              sm: 600,
            },
          } }
        />
        <RecipeDescription description={ recipe.description } />
      </CardContent>
    </Card>
  );
};
