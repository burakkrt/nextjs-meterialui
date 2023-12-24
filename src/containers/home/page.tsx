'use client';
import React from 'react';
import HomeWelcome from '@/components/home-welcome';
import { useTheme } from '@mui/material/styles';
import Referances from '@components/referances';

async function HomeContainer() {
  const theme = useTheme();

  return (
    <>
      <HomeWelcome theme={theme} />
      <Referances />
    </>
  );
}

export default HomeContainer;
