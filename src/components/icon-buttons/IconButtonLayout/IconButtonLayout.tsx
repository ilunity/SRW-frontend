import React from 'react';
import { IconButtonLayoutProps } from './IconButtonLayout.types';
import { Box, IconButton, Tooltip } from '@mui/material';

export const IconButtonLayout: React.FC<IconButtonLayoutProps> = ({ title, wrapperSx, ...props }) => {
  return (
    <Box sx={ wrapperSx }>
      <Tooltip title={ title }>
        <IconButton { ...props } />
      </Tooltip>
    </Box>
  );
};
