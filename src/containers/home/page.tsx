'use client';
import React from 'react';
import HomeWelcome from '@/components/home-welcome';
import { useTheme } from '@mui/material/styles';

function HomeContainer() {
  const theme = useTheme();
  return (
    <>
      <HomeWelcome theme={theme} />
    </>
  );
}

export default HomeContainer;
