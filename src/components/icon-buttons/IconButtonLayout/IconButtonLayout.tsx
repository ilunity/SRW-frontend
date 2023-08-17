import React from 'react';
import { IconButtonLayoutProps } from './IconButtonLayout.types';
import { Box, IconButton, Tooltip } from '@mui/material';

export const IconButtonLayout: React.FC<IconButtonLayoutProps> = ({ title, ...props }) => {
  return (
    <Box>
      <Tooltip title={ title }>
        <IconButton { ...props } />
      </Tooltip>
    </Box>
  );
};
