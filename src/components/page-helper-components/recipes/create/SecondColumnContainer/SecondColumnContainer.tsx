import React from 'react';
import { SecondColumnContainerProps } from './SecondColumnContainer.types';
import { Stack } from '@mui/material';

export const SecondColumnContainer: React.FC<SecondColumnContainerProps> = ({ children }) => {
  return (
    <Stack
      direction={ {
        xs: 'column',
        sm: 'row',
        md: 'column',
      } }
      spacing={ 4 }
      flexGrow={ 1 }
      sx={ {
        width: {
          xs: '100%',
          md: '35%',
        },
      } }
    >
      { children }
    </Stack>
  );
};
