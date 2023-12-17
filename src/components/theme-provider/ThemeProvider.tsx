'use client';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IRootProps } from './types';
import CssBaseline from '@mui/material/CssBaseline';
import GetReduxStates from '@/store/redux-methods';
import handleCreateTheme from './generate-theme';

function ThemeRootProvider({ children }: IRootProps) {
  const theme = createTheme(handleCreateTheme(GetReduxStates('mode') || 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRootProvider;
