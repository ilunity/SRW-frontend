import React from 'react';
import { PaperWrapperProps } from './PaperWrapper.types';
import { Paper } from '@mui/material';

export const PaperWrapper: React.FC<PaperWrapperProps> = ({ children, sx }) => {
  return (
    <Paper
      sx={ {
        ...sx,
        p: 3,
        borderRadius: 3,
      } }
    >
      { children }
    </Paper>
  );
};
