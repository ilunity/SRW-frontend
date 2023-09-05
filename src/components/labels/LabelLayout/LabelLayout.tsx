import React from 'react';
import { LabelLayoutProps } from './LabelLayout.types';
import { Stack, SvgIcon, Typography } from '@mui/material';

export const LabelLayout: React.FC<LabelLayoutProps> = ({ size, color, text, icon }) => {
  return (
    <Stack direction={ 'row' } spacing={ 1 }>
      <SvgIcon fontSize={ size } color={ color }>
        { icon }
      </SvgIcon>
      <Typography fontSize={ size }>
        { text }
      </Typography>
    </Stack>
  );
};
