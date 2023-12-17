'use client';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IRootProps } from './types';
import CssBaseline from '@mui/material/CssBaseline';
import handleCreateTheme from './generate-theme';
import { useSelector } from 'react-redux';

function ThemeRootProvider({ children }: IRootProps) {
  const mode = useSelector((state: any) => state.mode);
  console.log(mode);
  const theme = createTheme(handleCreateTheme(mode || 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRootProvider;
