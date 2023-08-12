import { Link, Typography } from '@mui/material';
import React from 'react';

const HOST = process.env.NEXT_CLIENT_HOST;

export const Copyright: React.FC = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      { 'Copyright © ' }
      <Link color='inherit' href={ HOST }>
        Food Recipe
      </Link>
      { ` ${ new Date().getFullYear() }.` }
    </Typography>
  );
};
