import React from 'react';
import { FooterProps } from './Footer.types';
import { Box } from '@mui/material';
import { Copyright } from '@/components/Copyright';

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      sx={ {
        mt: 2,
        height: 50,
      } }
    >
      <Copyright />
    </Box>
  );
};
