import React from 'react';
import { LinkButtonProps } from './LinkButton.types';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

export const LinkButton: React.FC<LinkButtonProps> = ({ children, href, ...buttonProps }) => {
  return (
    <NextLink href={ href } passHref>
      <Button
        variant={ 'outlined' }
        { ...buttonProps }
      >
        { children }
      </Button>
    </NextLink>
  );
};
