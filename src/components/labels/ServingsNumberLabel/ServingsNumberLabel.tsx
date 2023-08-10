import React from 'react';
import { ServingsNumberLabelProps } from './ServingsNumberLabel.types';
import { Stack, Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export const ServingsNumberLabel: React.FC<ServingsNumberLabelProps> = ({ servings_number }) => {
  return (
    <Stack direction={ 'row' } spacing={ 1 }>
      <LocalDiningIcon />
      <Typography>
        { servings_number } порц.
      </Typography>
    </Stack>
  );
};
