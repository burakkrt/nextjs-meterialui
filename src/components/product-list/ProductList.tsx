import React, { useState } from 'react';
import { IRootParams, IRenderProductCard } from './types';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ProductList = ({ data, locale }: IRootParams) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handlerIsLoading = () => {
    setIsLoading(false);
  };

  const ProductCard = ({ product, load = false }: IRenderProductCard) => {
    return (
      <Card sx={{ minHeight: '100%' }}>
        <CardHeader
          title={product[locale === 'en' ? 'titleEng' : 'title']}
          titleTypographyProps={{
            variant: 'body1',
            component: 'h4',
            fontWeight: 600,
            lineHeight: 1.2,
            minHeight: '39px',
          }}
          subheader={product[locale === 'en' ? 'categoryEng' : 'category']}
        />
        <CardMedia
          title={product[locale === 'en' ? 'titleEng' : 'title']}
          sx={{
            minHeight: 200,
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
              minHeight: 150,
            },
          }}>
          <Image
            src={product.imageUrl}
            onLoad={() => load && handlerIsLoading()}
            alt={product[locale === 'en' ? 'titleEng' : 'title']}
            fill
            priority
            sizes="100%"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body2">
            {product[locale === 'en' ? 'descEng' : 'desc'].slice(0, 200)}...
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Link href="/">
            <Button size="small" variant="contained" color="primary">
              Detaylı İncele
            </Button>
          </Link>
          <Link href={`/${locale}/contact`}>
            <Button size="small" variant="contained" color="primary">
              Sipariş Ver
            </Button>
          </Link>
        </CardActions> */}
      </Card>
    );
  };

  return data?.map((product, index) => {
    return (
      <Grid key={index} item xs={12} lg={6} xl={4}>
        {isLoading ? (
          <Skeleton variant="rounded" animation="pulse" sx={{ bgcolor: 'grey.500' }}>
            <ProductCard product={product} load />
          </Skeleton>
        ) : (
          <ProductCard product={product} />
        )}
      </Grid>
    );
  });
};

export default ProductList;
