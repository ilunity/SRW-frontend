import React, { useMemo } from 'react';
import { ThemeProviderProps } from './ThemeProvider.types';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { createTheme, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { themeOptions } from '@/utils';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { mode } = useSelector((state: RootState) => state.theme);

  const theme = useMemo(() =>
    responsiveFontSizes(createTheme(
      deepmerge(themeOptions, {
        palette: { mode },
      }),
    )), [mode],
  );

  return (
    <MuiThemeProvider theme={ theme }>
      { children }
    </MuiThemeProvider>
  );
};
