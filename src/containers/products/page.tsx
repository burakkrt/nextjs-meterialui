'use client';
import React from 'react';

import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IRootParams } from './types';

const ProductsContainer = ({ locale }: IRootParams) => {
  const theme = useTheme();
  const t = useTranslations('Body.Products');
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/images/products/product-hero.jpg")',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          ':before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(0, 0, 0, 0), #820300)',
            zIndex: '1',
          },
          [theme.breakpoints.down('sm')]: {
            minHeight: 400,
          },
        }}>
        <Typography
          variant="h2"
          component="span"
          sx={{
            color: '#FFF6F6',
            zIndex: '2',
            textTransform: 'uppercase',
            fontWeight: '900',
            letterSpacing: 5,
            [theme.breakpoints.down('sm')]: {
              fontSize: 42,
            },
          }}>
          {t('title')}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" sx={{ zIndex: 111, color: 'white', marginTop: 2 }}>
          <Link
            style={{
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              fontSize: '1rem',
            }}
            color="inherit"
            href={`/${locale}`}>
            <HomeIcon sx={{ mr: 1, fontSize: 22 }} fontSize="inherit" />
            {t('breadcrumbsHome')}
          </Link>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
            <ShoppingBasketIcon sx={{ mr: 1, fontSize: 22 }} fontSize="inherit" />
            {t('title')}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ backgroundColor: '#820300' }}>
        <Container maxWidth="xl">
          <Box sx={{ minHeight: '100vh' }}></Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductsContainer;
