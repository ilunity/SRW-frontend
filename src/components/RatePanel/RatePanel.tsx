import React from 'react';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { RatePanelProps } from '@/components/RatePanel/RatePanel.types';
import { FavouriteButton } from '@/components/AddFavouriteButton';
import { RatingButton } from '@/components/RatingButton';


export const RatePanel: React.FC<RatePanelProps> = ({ recipeId }) => {
  return (
    <Card
      sx={ {
        borderRadius: 3,
        '& .MuiCardContent-root:last-child': { pb: 2 },
      } }
    >
      <CardContent>
        <Stack
          direction={ 'row' }
          spacing={ 3 }
          sx={ {
            justifyContent: 'center',
            alignItems: 'center',
          } }
          divider={ <Divider orientation={ 'vertical' } flexItem /> }
        >
          <Typography variant={ 'h6' }>
            Оценить
          </Typography>
          <FavouriteButton recipeId={ recipeId } />
          <RatingButton recipeId={ recipeId } />
        </Stack>
      </CardContent>
    </Card>
  );
};
