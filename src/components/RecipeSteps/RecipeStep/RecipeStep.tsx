import React from 'react';
import { RecipeStepProps } from './RecipeStep.types';
import { Card, CardContent, CardHeader, CardMedia, Divider } from '@mui/material';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const RecipeStep: React.FC<RecipeStepProps> = ({ step, stepNumber }) => {
  return (
    <Card
      key={ step.id }
      variant={ 'outlined' }
      sx={ {
        borderRadius: 3,
      } }
    >
      <CardHeader title={ `Шаг ${ stepNumber + 1 }` } />
      <Divider orientation={ 'horizontal' } variant={ 'middle' } />
      <CardContent>
        { step.img &&
          <CardMedia
            component={ 'img' }
            src={ HOST + step.img }
            alt={ 'Фотография шага инструкции' }
            sx={ {
              float: {
                xs: 'none',
                sm: 'left',
              },
              width: {
                xs: '100%',
                sm: 300,
                md: 400,
              },
              maxWidth: {
                xs: 400,
                sm: 'auto',
              },
              m: theme => ({
                xs: theme.spacing(0, 'auto', 1),
                sm: theme.spacing(0, 2, 1, 0),
              }),
              borderRadius: 2,
            } }
          />
        }
        { step.content }
      </CardContent>
    </Card>
  );
};
