import React from 'react';
import { IRootParams } from './types';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

import WhyUsHero from '@/../public/images/why-us/fire-fighters-1510065_1280.jpg';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WhyUs = ({ locale }: IRootParams) => {
  const theme = useTheme();
  const t = useTranslations('Body.Home.WhyUs');
  return (
    <Box sx={{ backgroundColor: '#2C3333', color: 'white' }}>
      <Container>
        <Grid container sx={{ padding: '2rem 0' }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                minWidth: 200,
                minHeight: 300,
                position: 'relative',
                margin: '0 auto',
                borderRadius: 2,
                overflow: 'hidden',
                [theme.breakpoints.up('lg')]: {
                  width: 500,
                  height: 400,
                  marginRight: 10,
                  marginTop: 4,
                  marginBottom: 4,
                },
              }}>
              <Image
                src={WhyUsHero}
                fill
                placeholder="blur"
                alt="Why Us ?"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ [theme.breakpoints.down('sm')]: { marginTop: 3 } }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                rowGap: 4,
              }}>
              <Typography
                variant="h4"
                component="h3"
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
                  {t('button')}
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
