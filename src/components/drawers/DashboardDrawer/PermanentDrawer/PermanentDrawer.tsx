import React from 'react';
import { PermanentDrawerProps } from './PermanentDrawer.types';
import { Box, Drawer, Toolbar } from '@mui/material';

export const PermanentDrawer: React.FC<PermanentDrawerProps> = ({ children, drawerWidth }) => {
  return (
    <Drawer
      variant={ 'permanent' }
      sx={ {
        flexShrink: 0,
        [`& > .MuiPaper-root`]: {
          zIndex: theme => theme.zIndex.appBar - 1,
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      } }
    >
      <Toolbar />
      <Box sx={ { overflowY: 'auto' } }>
        { children }
      </Box>
    </Drawer>
  );
};
