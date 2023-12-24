import React from 'react';
import { IRootParams } from './types';

import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MouseIcon from '@mui/icons-material/Mouse';
import { useTranslations } from 'next-intl';

async function HomeWelcome({ theme }: IRootParams) {
  const t = useTranslations('Body.Home');

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          ':before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            [theme.breakpoints.up('lg')]: {
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
          },
          display: 'none',
          [theme.breakpoints.up('md')]: {
            display: 'block',
          },
        }}>
        <video
          width="100%"
          height="100%"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          autoPlay
          muted
          loop
          poster="/images/home/onload.png">
          <source src="/images/home/welcome-video.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          padding: 1,

          [theme.breakpoints.between('lg', 'xl')]: {
            position: 'absolute',
            right: '4%',
            top: '0',
            height: '100%',
            width: '55%',
          },
          [theme.breakpoints.up('xl')]: {
            position: 'absolute',
            right: '4%',
            top: '0',
            height: '100%',
            width: '45%',
          },
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}>
          <Typography
            variant="h6"
            component="span"
            color="whitesmoke"
            sx={{
              color: '#191919',
              borderBottom: '2px solid #BF3131',
              paddingBottom: 1,
              [theme.breakpoints.between('sm', 'lg')]: {
                borderBottom: '4px solid #BF3131',
                fontFamily: 'fantasy, monospace',
                fontSize: '2.75rem',
                textAlign: 'center',
              },
              [theme.breakpoints.between('lg', 'xl')]: {
                borderBottom: '4px solid #BF3131',
                fontFamily: 'fantasy, monospace',
                marginTop: 15,
                fontSize: '3rem',
                color: '#F6F1F1',
                lineHeight: 1,
              },
              [theme.breakpoints.up('xl')]: {
                borderBottom: '4px solid #BF3131',
                fontFamily: 'fantasy, monospace',
                marginTop: 25,
                fontSize: '3.75rem',
                color: '#F6F1F1',
                lineHeight: 1,
              },
            }}>
            {t('welcomeTitle')}
          </Typography>

          <Grid
            container
            sx={{
              [theme.breakpoints.up('lg')]: {
                backgroundColor: 'rgba(0, 0, 0,0.2)',
                borderRadius: 1,
              },
            }}>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: 300,
                  opacity: '0.9',
                }}>
                <Image
                  src="/images/home/fire-extinguisher.png"
                  alt="Fire Extinguishers"
                  fill
                  sizes="100%"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  padding: 3,
                }}>
                <Typography
                  variant="body1"
                  color="#191919"
                  sx={{ [theme.breakpoints.up('lg')]: { color: 'white' } }}>
                  {t('welcomeDesc')}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  sx={{ marginTop: 2, [theme.breakpoints.down('sm')]: { display: 'none' } }}
                  endIcon={<MouseIcon />}>
                  Hizmetleri İncele
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeWelcome;
