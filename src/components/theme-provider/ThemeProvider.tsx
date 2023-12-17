'use client';
import { useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IRootProps } from './types';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const handleCreateTheme = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ['Alegreya', 'Roboto', '-apple-system'].join(','),
  },
  palette: {
    mode,
    body: {
      ...(mode === 'light'
        ? {
            // palette values for light mode
            test: 'red',
          }
        : {
            // palette values for dark mode
            test: 'yellow',
          }),
    },
  },
});

function ThemeRootProvider({ children }: IRootProps) {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(handleCreateTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRootProvider;
