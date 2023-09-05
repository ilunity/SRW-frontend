import React from 'react';
import { RecipeStepsProps } from './RecipeSteps.types';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { RecipeStep } from '@/components/RecipeSteps/RecipeStep';

export const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <>
      <Card sx={ { borderRadius: 3 } }>
        <CardHeader
          title={ 'Инструкция:' }
        />
        <CardContent>
          <Stack spacing={ 2 }>
            { steps.map((step, index) => <RecipeStep key={ step.id } step={ step } stepNumber={ index } />) }
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
