import React from 'react';
import { PageContainerProps } from './PageContainer.types';
import { Stack } from '@mui/material';

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Stack
      spacing={ 4 }
      alignItems={ 'center' }
    >
      { children }
    </Stack>
  );
};
