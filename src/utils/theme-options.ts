import { CSSInterpolation, ThemeOptions } from '@mui/material';
import { grey } from '@mui/material/colors';

export const themeOptions: ThemeOptions = {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const modifiedStyled: CSSInterpolation = {};

          if (theme.palette.mode === 'light' && ownerState.variant === 'outlined') {
            modifiedStyled.backgroundColor = grey['50'];
          }

          return modifiedStyled;
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
};
