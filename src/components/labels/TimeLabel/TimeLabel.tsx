import React from 'react';
import { TimeLabelProps } from './TimeLabel.types';
import { Stack, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const TimeLabel: React.FC<TimeLabelProps> = ({ time }) => {
  return (
    <Stack direction={ 'row' } spacing={ 1 }>
      <AccessTimeIcon />
      <Typography>
        { time } мин.
      </Typography>
    </Stack>
  );
};
