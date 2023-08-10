import React from 'react';
import { RecipeHeadingProps } from './RecipeHeading.types';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { RecipeDescription } from '@/components/RecipeDescription';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const RecipeHeading: React.FC<RecipeHeadingProps> = ({ recipe }) => {
  return (
    <Card sx={ { borderRadius: 3 } }>
      <CardHeader
        title={
          <Stack
            direction={ 'row' }
            sx={ {
              justifyContent: 'space-between',
              alignItems: 'center',
            } }
          >
            <Typography variant={ 'h4' } component={ 'h1' }>
              { recipe.title }
            </Typography>
            <ListItem component={ 'div' } sx={ { width: 'auto' } }>
              <ListItemAvatar>
                <Avatar
                  alt='Аватар пользователя'
                  src={ HOST + recipe.user.avatar }
                  variant={ 'rounded' }
                >
                  { recipe.user.username[0].toUpperCase() }
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={ recipe.user.username } />
            </ListItem>
          </Stack>
        }
      />
      <CardContent>
        <CardMedia
          component={ 'img' }
          src={ HOST + recipe.img }
          alt={ 'Фотография приготовленного блюда' }
          sx={ {
            mb: 4,
            borderRadius: 2,
            height:{
              xs: 200,
              sm: 300,
              md: 350,
            }
          } }
        />
        <RecipeDescription description={ recipe.description } />
      </CardContent>
    </Card>
  );
};
