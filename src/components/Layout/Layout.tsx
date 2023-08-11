import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { LayoutProps } from '@/components/Layout/Layout.types';
import { Header } from '@/components/Header';
import React from 'react';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
          minHeight: 'inherit',
          display: 'flex',
          flexDirection: 'column',
        } }
      >
        <Header />
        <Container
          component={ 'main' }
          sx={ {
            flex: '1 0 auto',
          } }
        >
          { children }
        </Container>
      </Box>
    </>
  );
};