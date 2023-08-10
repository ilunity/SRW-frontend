import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import '@/styles/normalize.css';
import { NextPage } from 'next';
import { getStandardLayout } from '@/utils/layouts';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/components/ThemeProvider';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || getStandardLayout;

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <ThemeProvider>
          <CssBaseline />
          { getLayout(<Component { ...pageProps } />) }
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
