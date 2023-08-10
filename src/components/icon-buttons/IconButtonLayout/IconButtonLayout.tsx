import React from 'react';
import { IconButtonLayoutProps } from './IconButtonLayout.types';
import { Box, IconButton, Tooltip } from '@mui/material';

export const IconButtonLayout: React.FC<IconButtonLayoutProps> = ({ title, onClick, children }) => {
  return (
    <Box>
      <Tooltip title={ title }>
        <IconButton
          aria-label={ title }
          onClick={ onClick }
        >
          { children }
        </IconButton>
      </Tooltip>
    </Box>
  );
};
