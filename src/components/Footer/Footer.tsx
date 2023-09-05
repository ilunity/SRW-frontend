import React from 'react';
import { Box } from '@mui/material';
import { Copyright } from '@/components/Copyright';

export const Footer: React.FC = () => {
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
