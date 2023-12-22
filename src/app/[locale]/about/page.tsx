'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import hero1 from '@/../public/images/about/heros/hero-1.jpg';
import hero2 from '@/../public/images/about/heros/hero-2.jpg';
import hero3 from '@/../public/images/about/heros/hero-3.jpg';
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';
const AboutPage = () => {
  const theme = useTheme();
  const t = useTranslations('Body.AboutUs');
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/images/about/about-hero.jpg")',
          backgroundPosition: 'center',
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
            background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgb(242, 241, 235))',
            zIndex: '1',
          },
          [theme.breakpoints.down('sm')]: {
            minHeight: 400,
          },
        }}>
        <Typography
          variant="h1"
          component="span"
          sx={{
            color: '#272829',
            zIndex: '2',
            textTransform: 'uppercase',
            fontWeight: '900',
            [theme.breakpoints.down('sm')]: {
              fontSize: 42,
            },
          }}>
          {t('title')}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            zIndex: '2',
            width: 400,
            height: 50,
            [theme.breakpoints.down('sm')]: {
              width: 200,
              height: 30,
            },
          }}>
          <Image src="/images/about/bottom-line.svg" alt="Line" fill sizes="100%" />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#F2F1EB', color: '#272829' }}>
        <Container
          maxWidth="xl"
          sx={{
            padding: '8rem 0',
            [theme.breakpoints.down('sm')]: {
              padding: '4rem 0',
            },
          }}>
          <Grid
            container
            rowSpacing={3}
            sx={{
              textAlign: 'center',
              [theme.breakpoints.down('sm')]: {
                paddingLeft: 2,
                paddingRight: 2,
              },
            }}>
            <Grid item xs={12} sm={8} sx={{ margin: '0 auto' }}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: '700' }}>
                {t('title2')}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} sx={{ margin: '0 auto' }}>
              <Typography variant="body1" component="p">
                {t('title2desc')}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginTop: 10,
              backgroundColor: '#EAECCC',
              [theme.breakpoints.down('lg')]: { padding: 2 },
            }}>
            <Grid item xs={12} lg={6} sx={{ margin: 'auto' }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: '700',
                  borderBottom: '2px solid #EEC759',
                  paddingBottom: 1,
                }}>
                {t('AboutUsTitle')}
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                {t('AboutUsDesc')}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={'auto'}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Box
                sx={{
                  position: 'relative',
                  minWidth: 600,
                  minHeight: 400,
                  [theme.breakpoints.down('sm')]: {
                    minWidth: 350,
                    minHeight: 250,
                    marginTop: 2,
                  },
                }}>
                <Image
                  src={hero1}
                  alt="ddd"
                  fill
                  sizes="100%"
                  placeholder="blur"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginTop: 0,
              backgroundColor: '#183D3D',
              color: 'white',
              [theme.breakpoints.down('lg')]: { padding: 2 },
            }}>
            <Grid
              item
              xs={12}
              lg={'auto'}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Box
                sx={{
                  position: 'relative',
                  minWidth: 600,
                  minHeight: 400,
                  [theme.breakpoints.down('sm')]: {
                    minWidth: 350,
                    minHeight: 250,
                    marginBottom: 2,
                  },
                }}>
                <Image
                  src={hero2}
                  alt="Vizyon & Misyon"
                  fill
                  placeholder="blur"
                  sizes="100%"
                  style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '8px' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ margin: 'auto' }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: '700',
                  borderBottom: '2px solid #88AB8E',
                  paddingBottom: 1,
                }}>
                {t('VisionMissionTitle')}
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                {t('VisionMissionDesc')}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              backgroundColor: '#B2533E',
              color: 'white',
              [theme.breakpoints.down('lg')]: { padding: 2 },
            }}>
            <Grid item xs={12} lg={6} sx={{ margin: 'auto' }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: '700',
                  borderBottom: '2px solid #FF8080',
                  paddingBottom: 1,
                }}>
                {t('OurWorkTitle')}
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                {t('OurWorkDesc')}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg="auto"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Box
                sx={{
                  position: 'relative',
                  minWidth: 600,
                  minHeight: 400,
                  [theme.breakpoints.down('sm')]: {
                    minWidth: 350,
                    minHeight: 250,
                    marginTop: 2,
                  },
                }}>
                <Image
                  src={hero3}
                  alt="ddd"
                  fill
                  placeholder="blur"
                  sizes="100%"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
