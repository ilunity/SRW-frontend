import React from 'react';
import { EmptyPageLayoutProps } from './EmptyPageLayout.types';
import { Container } from '@mui/material';

export const EmptyPageLayout: React.FC<EmptyPageLayoutProps> = ({ children }) => {
  return (
    <Container
      component={ 'main' }
      sx={ {
        height: '100vh',
      } }
    >
      { children }
    </Container>
  );
};
