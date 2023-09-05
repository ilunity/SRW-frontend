import Head from 'next/head';
import { Box, Container, Toolbar } from '@mui/material';
import { StandardLayoutProps } from '@/components/page-layouts/StandardLayout/StandardLayout.types';
import { Header } from '@/components/Header';
import React from 'react';
import { blue } from '@mui/material/colors';
import { Footer } from '@/components/Footer';

export const StandardLayout: React.FC<StandardLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Food Recipes</title>
        <meta name='description' content='Food recipes site created for university research work' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/broccoli.png' />
      </Head>
      <Box
        sx={ {
          width: 'inherit',
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: (theme) => theme.palette.mode === 'light' ? blue['50'] : theme.palette.background.default,
        } }
      >
        <Header />
        <Toolbar sx={ { mb: 6 } } />
        <Container
          component={ 'main' }
          sx={ { flex: '1 0 auto' } }
        >
          { children }
        </Container>
        <Footer />
      </Box>
    </>
  );
};
