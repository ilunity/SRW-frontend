import React from 'react';
import { RatePanelProps } from './RatePanel.types';
import { Card, CardContent, Divider, Rating, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';


export const RatePanel: React.FC<RatePanelProps> = () => {
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
          <Button variant={ 'contained' } endIcon={ <FavoriteIcon sx={ { color: red[500] } } /> }>
            В избранное
          </Button>
          <Rating precision={ 0.5 } size={ 'large' } />
        </Stack>
      </CardContent>
    </Card>
  );
};
