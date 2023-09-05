import React from 'react';
import { Card, CardContent, Stack, Typography, useMediaQuery } from '@mui/material';
import { RatePanelProps } from '@/components/RatePanel/RatePanel.types';
import { FavouriteButton } from '@/components/AddFavouriteButton';
import { RatingButton } from '@/components/RatingButton';
import { Theme } from '@mui/system';


export const RatePanel: React.FC<RatePanelProps> = ({ recipeId }) => {
  const mediaQuerySm: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

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
          gap={ 2 }
          sx={ {
            justifyContent: 'center',
            alignItems: 'center',
          } }
          flexWrap={ 'wrap' }
        >
          { mediaQuerySm &&
            <Typography variant={ 'h6' }>
              Оценить
            </Typography>
          }
          <FavouriteButton recipeId={ recipeId } />
          <RatingButton recipeId={ recipeId } />
        </Stack>
      </CardContent>
    </Card>
  );
};
