'use client';
import React from 'react';
import { IRootParams } from './types';

import HomeWelcome from '@/components/home-welcome';
import { useTheme } from '@mui/material/styles';
import Referances from '@components/referances';
import WhyUs from '@/components/why-u-s';
import Services from '@/components/services';

function HomeContainer({ locale }: IRootParams) {
  const theme = useTheme();

  return (
    <>
      <HomeWelcome theme={theme} />
      <Referances />
      <WhyUs locale={locale} />
      <Services locale={locale} />
    </>
  );
}

export default HomeContainer;
