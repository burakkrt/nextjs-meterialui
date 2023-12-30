import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import gepKagitLogo from '@/../public/images/referances/gepkagit-logo.png';
import okulLogo from '@/../public/images/referances/meblogo.png';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';

const Referances = () => {
  const theme = useTheme();
  const t = useTranslations('Body.Home.Referances');
  const [loadingReferance1, setLoadingReferance1] = useState(true);
  const [loadingReferance2, setLoadingReferance2] = useState(true);

  return (
    <Box
      sx={{
        marginTop: 0,
        padding: '2rem 0',
        backgroundColor: '#F2F1EB',
      }}>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
          color: '#3D3B40',
          marginBottom: 4,
          [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
          },
        }}>
        <Typography variant="h4" component="h3" sx={{ marginBottom: 1, fontWeight: '800' }}>
          {t('title')}
        </Typography>
        <Typography variant="body1" component="span" sx={{ color: '3D3B40' }}>
          {t('desc')}
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: 'center',
        }}>
        <Grid item xs={12} sm={6} lg={4} xl={2}>
          {loadingReferance1 ? (
            <Skeleton
              variant="rounded"
              animation="pulse"
              width={250}
              height={145}
              sx={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 250,
                  height: 145,
                  margin: '0 auto',
                  [theme.breakpoints.down('sm')]: {
                    width: 200,
                    height: 125,
                    margin: '1rem auto',
                  },
                }}>
                <Image
                  src={gepKagitLogo}
                  alt="Referance Logo"
                  fill
                  onLoad={() => setLoadingReferance1(false)}
                  sizes="100%"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    WebkitFilter: 'grayscale(100%)',
                    filter: 'grayscale(100%)',
                  }}
                />
              </Box>
            </Skeleton>
          ) : (
            <Box
              sx={{
                position: 'relative',
                width: 250,
                height: 145,
                margin: '0 auto',
                [theme.breakpoints.down('sm')]: {
                  width: 200,
                  height: 125,
                  margin: '1rem auto',
                },
              }}>
              <Image
                src={gepKagitLogo}
                alt="Referance Logo"
                fill
                priority
                sizes="100%"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  WebkitFilter: 'grayscale(100%)',
                  filter: 'grayscale(100%)',
                }}
              />
            </Box>
          )}
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ marginRight: 0, marginLeft: 4 }} />
        <Grid item xs={12} sm={6} lg={4} xl={2}>
          {loadingReferance2 ? (
            <Skeleton
              variant="rounded"
              animation="pulse"
              width={250}
              height={145}
              sx={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 250,
                  height: 145,
                  margin: '0 auto',
                  [theme.breakpoints.down('sm')]: {
                    width: 200,
                    height: 125,
                    margin: '1rem auto',
                  },
                }}>
                <Image
                  src={okulLogo}
                  alt="Referance Logo"
                  fill
                  onLoad={() => setLoadingReferance2(false)}
                  sizes="100%"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    WebkitFilter: 'grayscale(100%)',
                    filter: 'grayscale(100%)',
                  }}
                />
              </Box>
            </Skeleton>
          ) : (
            <Box
              sx={{
                position: 'relative',
                width: 250,
                height: 145,
                margin: '0 auto',
                [theme.breakpoints.down('sm')]: {
                  width: 200,
                  height: 125,
                  margin: '1rem auto',
                },
              }}>
              <Image
                src={okulLogo}
                alt="Referance Logo"
                fill
                sizes="100%"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  WebkitFilter: 'grayscale(100%)',
                  filter: 'grayscale(100%)',
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Referances;
