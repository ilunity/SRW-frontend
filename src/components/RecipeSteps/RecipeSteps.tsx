import React from 'react';
import { RecipeStepsProps } from './RecipeSteps.types';
import { Card, CardContent, CardHeader, CardMedia, Divider, Stack } from '@mui/material';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <>
      <Card sx={ { borderRadius: 3 } }>
        <CardHeader
          title={ 'Инструкция:' }
        />
        <CardContent>
          <Stack spacing={ 2 }>
            { steps.map((step, index) => {
              return (
                <Card
                  key={ step.id }
                  variant={ 'outlined' }
                  sx={ {
                    borderRadius: 3,
                  } }
                >
                  <CardHeader title={ `Шаг ${ index + 1 }` } />
                  <Divider orientation={ 'horizontal' } variant={ 'middle' } />
                  <CardContent>
                    { step.img &&
                      <CardMedia
                        component={ 'img' }
                        src={ HOST + step.img }
                        alt={ 'Фотография шага инструкции' }
                        sx={ {
                          float: 'left',
                          width: {
                            xs: 200,
                            sm: 300,
                            md: 400,
                          },
                          borderRadius: 2,
                          mr: 2,
                          mb: 1,
                        } }
                      />
                    }
                    { step.content }
                  </CardContent>
                </Card>
              );
            }) }
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
