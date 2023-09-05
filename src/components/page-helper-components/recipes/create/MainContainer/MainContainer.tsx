import React from 'react';
import { MainContainerProps } from './MainContainer.types';
import { Stack } from '@mui/material';

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Stack
      spacing={ 4 }
      direction={ {
        xs: 'column',
        md: 'row',
      } }
      sx={ {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'start',
      } }
    >
      { children }
    </Stack>
  );
};
