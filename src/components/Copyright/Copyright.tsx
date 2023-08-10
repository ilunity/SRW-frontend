import { Link, Typography } from '@mui/material';
import React from 'react';
import { CopyrightProps } from './Copyright.types';

const HOST = process.env.NEXT_CLIENT_HOST;

export const Copyright: React.FC<CopyrightProps> = () => {
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
