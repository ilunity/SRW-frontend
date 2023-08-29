import React from 'react';
import { IngredientsProps } from './Ingredients.types';
import { Avatar, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material';
import { getProductWithMeasurementSign } from '@/utils';

const HOST = process.env.NEXT_PUBLIC_HOST;

export const Ingredients: React.FC<IngredientsProps> = ({ recipeProducts }) => {
  return (
    <Card
      sx={ {
        borderRadius: 3,
        width: 400,
        position: 'sticky',
        top: 48,
        display: {
          xs: 'none',
          lg: 'block',
        },
      } }
    >
      <CardHeader title={ 'Ингредиенты:' } />
      <CardContent>
        <Stack
          component={ 'ul' }
          spacing={ 1 }
        >
          { recipeProducts.map(recipeProduct => {
            return (
              <Paper
                component={ 'li' }
                key={ recipeProduct.id }
                variant={ 'outlined' }
                sx={ {
                  width: 'auto',
                  p: 1,
                } }
              >
                <Stack
                  direction={ 'row' }
                  sx={ {
                    alignItems: 'center',
                    width: 'auto',
                  } }
                >
                  <Avatar
                    alt={ `Картинка ${ recipeProduct.product.name }` }
                    src={ HOST + recipeProduct.product.img }
                    variant={ 'rounded' }
                    sx={ {
                      width: 24,
                      height: 24,
                      mr: 2,
                    } }
                  >
                    { recipeProduct.product.name[0].toUpperCase() }
                  </Avatar>
                  <Typography
                    sx={ { flex: '1 0 auto' } }
                    variant={ 'body1' }
                  >
                    { recipeProduct.product.name }
                  </Typography>
                  <Typography color={ 'text.secondary' }>
                    { getProductWithMeasurementSign(
                      recipeProduct.measurement_value,
                      recipeProduct.measurement_type,
                    ) }
                  </Typography>
                </Stack>
              </Paper>
            );
          }) }
        </Stack>
      </CardContent>
    </Card>
  );
};
