import { ReactElement } from 'react';
import { Container } from '@mui/material';

export const getEmptyLayout = (page: ReactElement) => {
  return (
    <Container
      component={ 'main' }
      sx={ {
        height: '100vh',
      } }
    >
      { page }
    </Container>
  );
};
