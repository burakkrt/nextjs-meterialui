import React from 'react';
import { IRootParams } from './types';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

import WhyUsHero from '@/../public/images/why-us/why-us-hero-removebg-preview.png';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WhyUs = ({ locale }: IRootParams) => {
  const theme = useTheme();
  const t = useTranslations('Body.Home.WhyUs');
  return (
    <Box sx={{ backgroundColor: '#F5F7FA' }}>
      <Container>
        <Grid container sx={{ padding: '2rem 0' }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                minWidth: 200,
                minHeight: 300,
                position: 'relative',
                margin: '0 auto',
                [theme.breakpoints.up('lg')]: {
                  width: 500,
                  height: 500,
                  marginRight: 10,
                },
              }}>
              <Image
                src={WhyUsHero}
                fill
                alt="Why Us ?"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                rowGap: 2,
              }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  [theme.breakpoints.down('sm')]: {
                    fontSize: 22,
                  },
                }}>
                {t('title')}
              </Typography>
              <Typography variant="body1" component="p">
                {t('desc')}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                sx={{
                  backgroundColor: '#D83F31',
                  color: 'white',
                  ':hover': { backgroundColor: '#D83F31' },
                }}>
                <Link href={`${locale}/about`} style={{ color: 'inherit' }}>
                  Daha Fazla
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;
