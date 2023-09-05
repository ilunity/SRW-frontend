import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import '@/styles/normalize.css';
import { NextPage } from 'next';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LayoutConstructor } from '@/utils/layout-constructor';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  layout?: LayoutConstructor;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.layout || new LayoutConstructor().standard();

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <ThemeProvider>
          <CssBaseline />
          { layout.build(<Component { ...pageProps } />) }
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
