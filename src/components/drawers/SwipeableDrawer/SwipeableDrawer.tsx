import React, { useEffect, useState } from 'react';
import { SwipeableDrawerProps } from './SwipeableDrawer.types';
import {
  Box,
  Divider,
  Fab,
  IconButton,
  SwipeableDrawer as MuiSwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const DRAWER_WIDTH = 350;

export const SwipeableDrawer: React.FC<SwipeableDrawerProps> = (
  {
    title = '',
    icon,
    children,
    disableInnerPadding = false,
    updateCounter,
  }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    closeDrawer();
  }, [updateCounter]);

  return (
    <>
      <Fab
        size={ 'small' }
        color={ 'primary' }
        aria-label={ 'add' }
        sx={ {
          position: 'fixed',
          bottom: 24,
          right: 24,
        } }
        onClick={ openDrawer }
      >
        { icon }
      </Fab>
      <MuiSwipeableDrawer
        anchor={ 'left' }
        open={ isDrawerOpen }
        onClose={ closeDrawer }
        onOpen={ openDrawer }
        elevation={ 0 }
        sx={ {
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: {
              xs: '100%',
              sm: DRAWER_WIDTH,
            },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        } }
      >
        <Toolbar
          disableGutters
          sx={ {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
          } }
        >
          <Typography variant={ 'h5' }>
            { title }
          </Typography>
          <IconButton
            onClick={ closeDrawer }
            sx={ { ml: 'auto' } }
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider flexItem />
        <Box
          sx={ {
            width: '100%',
            p: disableInnerPadding ? 0 : 2,
            overflowY: 'auto',
          } }
        >
          { children }
        </Box>
      </MuiSwipeableDrawer>
    </>
  );
};
