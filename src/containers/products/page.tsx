'use client';
import React, { useEffect, useState } from 'react';
import { IRootParams } from './types';
import { useTranslations } from 'next-intl';
import productsData, { categoryPriority } from '@data/products/products';
import { IProductDatas } from '@data/products/types';
import ProductsData from '@data/products/products';
import ProductList from '@/components/product-list';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme } from '@mui/material/styles';

const ProductsContainer = ({ locale }: IRootParams) => {
  const theme = useTheme();
  const t = useTranslations('Body.Products');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchProduct, setSearchProduct] = useState<IProductDatas | null>(null);
  const [data, setData] = useState<Array<IProductDatas>>(ProductsData);

  const handleCategory = (category: string) => {
    setSearchProduct(null);
    setActiveCategory(category);

    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchProduct = (selectProduct: IProductDatas | null) => {
    setActiveCategory('all');
    setSearchProduct(selectProduct);

    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (activeCategory === 'all' && searchProduct === null) {
      setData(ProductsData);
    } else if (activeCategory !== 'all') {
      setData(
        ProductsData.filter(
          (product) => product[locale === 'en' ? 'categoryEng' : 'category'] === activeCategory
        )
      );
    } else if (searchProduct !== null) {
      setData(
        ProductsData.filter(
          (product) => product[locale === 'en' ? 'titleEng' : 'title'] === searchProduct?.title
        )
      );
    }
  }, [searchProduct, activeCategory]);

  const returnLangCategory = () => {
    const convertCategory = productsData
      .map((product) => product[locale === 'en' ? 'categoryEng' : 'category'])
      .reduce((acc: Array<string>, category: string) => {
        if (acc.indexOf(category) === -1) {
          acc.push(category);
        }
        return acc;
      }, []);

    return convertCategory;
  };

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
          <Grid container sx={{ minHeight: '100vh', padding: '8rem 0', position: 'relative' }}>
            <Box
              sx={{
                [theme.breakpoints.up('sm')]: { display: 'none' },
                position: 'sticky',
                top: 0,
                width: '100%',
                backgroundColor: 'white',
                zIndex: 11,
                padding: 2,
              }}>
              <Autocomplete
                id="products-search"
                options={ProductsData}
                groupBy={(option) => option.category}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label={t('searchPlaceholder')} />}
                onChange={(e, selectProduct) => handleSearchProduct(selectProduct)}
                value={searchProduct}
                sx={{ borderRadius: 1 }}
              />
            </Box>
            <Grid
              item
              xs={12}
              sm={5}
              lg={4}
              xl={3}
              sx={{
                color: 'black',
                padding: 2,
                backgroundColor: '#F5F7F8',
                borderRight: '1px solid rgba(0,0,0,0.2)',
              }}>
              <Box sx={{ position: 'sticky', top: 10 }}>
                <Box sx={{ [theme.breakpoints.down('sm')]: { display: 'none' } }}>
                  <Autocomplete
                    id="products-search"
                    options={ProductsData}
                    groupBy={(option) => option[locale === 'en' ? 'categoryEng' : 'category']}
                    getOptionLabel={(option) => option[locale === 'en' ? 'titleEng' : 'title']}
                    renderInput={(params) => (
                      <TextField {...params} label={t('searchPlaceholder')} />
                    )}
                    onChange={(e, selectProduct) => handleSearchProduct(selectProduct)}
                    value={searchProduct}
                    sx={{ borderRadius: 1 }}
                  />
                </Box>
                <Box sx={{ marginTop: 3, textAlign: 'center' }}>
                  <Link href={`/${locale}/contact`} style={{ display: 'inline-block' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ShoppingBasketIcon /> {t('goContactButton')}
                    </Button>
                  </Link>
                </Box>

                <Box sx={{ marginTop: 1.5 }}>
                  <Typography variant="body1" component="p" sx={{ lineHeight: 2.5 }}>
                    {t('categories')}
                  </Typography>
                  <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                    color="inherit"
                    sx={{ width: '100%', border: '1px solid rgba(0,0,0,0.2)' }}>
                    {returnLangCategory().map((category, index) => (
                      <Button
                        key={index}
                        onClick={() => handleCategory(category)}
                        sx={{
                          color: `${category === activeCategory ? 'white' : '#61677A'}`,
                          justifyContent: 'start',
                          backgroundColor: `${category === activeCategory ? '#99B080' : 'none'}`,
                          ':hover': {
                            backgroundColor: `${category === activeCategory ? '#99B080;' : ''}`,
                          },
                        }}>
                        <Typography
                          variant="body1"
                          component="span"
                          sx={{ textAlign: 'start', marginLeft: 1 }}>
                          {category}
                        </Typography>
                      </Button>
                    ))}
                  </ButtonGroup>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} lg={8} xl={9}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#F5F7F8',
                  padding: 2,
                  [theme.breakpoints.down('sm')]: {
                    paddingTop: 12,
                  },
                }}
                id="products">
                <Grid container spacing={2}>
                  <ProductList data={data} locale={locale} />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsContainer;
