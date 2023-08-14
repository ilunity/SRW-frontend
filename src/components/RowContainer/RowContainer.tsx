import React from 'react';
import { RowContainerProps } from './RowContainer.types';
import { Stack } from '@mui/material';

export const RowContainer: React.FC<RowContainerProps> = ({ children }) => {
  return (
    <Stack
      direction={ 'row' }
      spacing={ 2 }
      alignItems={ 'center' }
    >
      { children }
    </Stack>
  );
};
