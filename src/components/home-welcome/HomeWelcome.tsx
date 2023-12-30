import React from 'react';
import { IRootParams } from './types';

import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MouseIcon from '@mui/icons-material/Mouse';
import { useTranslations } from 'next-intl';
import welcomeImage from '@/../public/images/home/fire-extinguisher.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import checkPathname from '@components/check-pathname';

function HomeWelcome({ theme, locale }: IRootParams) {
  const t = useTranslations('Body.Home');
  const pathname = usePathname();

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          ':before': {
            content: '""',
            display: 'none',
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            [theme.breakpoints.up('lg')]: {
              display: 'block',
            },
          },
          display: 'block',
          [theme.breakpoints.up('md')]: {
            display: 'block',
          },
          [theme.breakpoints.down('lg')]: {
            position: 'relative',
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
        <Typography
          variant="h6"
          component="h1"
          color="whitesmoke"
          sx={{
            color: 'white',
            display: 'none',
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            textAlign: 'center',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            [theme.breakpoints.down('lg')]: {
              display: 'block',
              padding: '0.6rem 0',
              lineHeight: 1.2,
            },
            [theme.breakpoints.between('sm', 'lg')]: {
              fontSize: 36,
              padding: '1rem 0',
            },
          }}>
          {t('welcomeTitle')}
        </Typography>
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
            component="h2"
            color="whitesmoke"
            sx={{
              color: '#191919',
              borderBottom: '2px solid #BF3131',
              paddingBottom: 1,
              marginTop: 4,
              [theme.breakpoints.down('lg')]: {
                display: 'none',
              },
              [theme.breakpoints.between('sm', 'lg')]: {
                borderBottom: '4px solid #BF3131',
                fontFamily: 'fantasy, monospace',
                fontSize: '2.75rem',
                textAlign: 'center',
                lineHeight: 1.2,
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
                  [theme.breakpoints.down('sm')]: {
                    minHeight: 200,
                  },
                }}>
                <Image
                  src={welcomeImage}
                  alt="Fire Extinguishers"
                  fill
                  placeholder="blur"
                  sizes="100%"
                  style={{ objectFit: 'contain' }}
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
                  [theme.breakpoints.down('sm')]: { padding: 1 },
                }}>
                <Typography
                  variant="body1"
                  component="p"
                  color="#191919"
                  sx={{
                    [theme.breakpoints.up('lg')]: { color: 'white' },
                    [theme.breakpoints.down('sm')]: { textAlign: 'center' },
                  }}>
                  {t('welcomeDesc')}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  sx={{ marginTop: 2, [theme.breakpoints.down('sm')]: { display: 'none' } }}
                  endIcon={<MouseIcon />}>
                  <Link
                    href={!checkPathname(pathname) ? `${locale}/products` : 'products'}
                    style={{ color: 'inherit' }}>
                    {t('welcomeButton')}
                  </Link>
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
