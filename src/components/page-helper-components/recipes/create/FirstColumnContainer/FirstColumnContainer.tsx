import React from 'react';
import { FirstColumnContainerProps } from './FirstColumnContainer.types';
import { Stack } from '@mui/material';

export const FirstColumnContainer: React.FC<FirstColumnContainerProps> = ({ children }) => {
  return (
    <Stack
      spacing={ 4 }
      flexGrow={ 1 }
      sx={ {
        width: {
          xs: '100%',
          md: '65%',
        },
      } }
    >
      { children }
    </Stack>
  );
};
