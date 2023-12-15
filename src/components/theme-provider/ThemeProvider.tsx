'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IRootProps } from './types';

function ThemeRootProvider({ children }: IRootProps) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Alegreya', 'Roboto', '-apple-system'].join(','),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeRootProvider;
