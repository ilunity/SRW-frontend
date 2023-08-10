import React from 'react';
import { RatingLabelProps } from './RatingLabel.types';
import { Stack, Typography } from '@mui/material';
import { Grade } from '@mui/icons-material';

export const RatingLabel: React.FC<RatingLabelProps> = ({ value }) => {
  return (
    <Stack direction={ 'row' } spacing={ 1 }>
      <Grade />
      <Typography>
        { value }
      </Typography>
    </Stack>
  );
};
