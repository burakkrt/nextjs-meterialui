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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ProductsData from '@data/products/products';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { categoryPriority } from '@data/products/products';

const renderCategories = () => {
  return (
    <Stack spacing={0}>
      {Object.keys(categoryPriority).map((category, index) => (
        <Button key={index}>{category}</Button>
      ))}
    </Stack>
  );
};

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
          <Grid
            container
            columnSpacing={2}
            sx={{ minHeight: '100vh', color: 'white', padding: '8rem 0' }}>
            <Grid item xs={4} sx={{ backgroundColor: 'white', color: 'black', padding: 2 }}>
              <Box sx={{ position: 'sticky', top: 10 }}>
                <Box>
                  <Autocomplete
                    id="products-search"
                    options={ProductsData}
                    groupBy={(option) => option.category}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => <TextField {...params} label="Ürün Ara" />}
                    onChange={(e, value) => console.log(value)}
                  />
                </Box>
                <Box>{renderCategories()}</Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              {Array(20)
                .fill(0)
                .map((_, index) => (
                  <Typography key={index}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quasi
                    quibusdam rerum deleniti architecto? Vel nobis quasi accusantium vitae hic odit
                    blanditiis qui enim excepturi ut. Quam fugiat perspiciatis quod.
                  </Typography>
                ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsContainer;
