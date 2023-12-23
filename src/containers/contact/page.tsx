'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import { IRootParams } from './types';

const ContactContainer = ({ locale }: IRootParams) => {
  const theme = useTheme();
  const t = useTranslations('Body.Contact');

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/images/contact/contact-hero.jpg")',
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
            background: 'linear-gradient(rgba(0, 0, 0, 0.4), #31304D)',
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
            color: 'white',
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
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ zIndex: 111, color: 'white', marginTop: 2, fontWeight: 700 }}>
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
            <CallIcon sx={{ mr: 1, fontSize: 22 }} fontSize="inherit" />
            {t('title')}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          backgroundColor: '#31304D',
          color: 'white',
          padding: '4rem 0',
          minHeight: '100dvh',
          [theme.breakpoints.down('md')]: { marginBottom: 0 },
          marginBottom: 45,
        }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}>
            <Typography
              variant="h6"
              component="p"
              sx={{ [theme.breakpoints.down('sm')]: { textAlign: 'center' } }}>
              {t('desc')}
            </Typography>
          </Box>
        </Container>
        <Container
          maxWidth="xl"
          sx={{ marginTop: 4, [theme.breakpoints.up('md')]: { marginTop: 10 } }}>
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              xl={4}
              sx={{ [theme.breakpoints.up('md')]: { minHeight: '600px' } }}>
              <Box
                sx={{
                  padding: 6,
                  color: 'white',
                  backgroundColor: '#011C2A',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  [theme.breakpoints.down('sm')]: {
                    padding: '5rem 2rem',
                  },
                  [theme.breakpoints.up('sm')]: {
                    borderRadius: '8px 0 0 8px',
                  },
                }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontFamily: 'Roboto, sans-serif;',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                  }}>
                  {t('mapTitle')}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ marginTop: 1, color: 'rgba(255,255,255,0.7)' }}>
                  {t('mapDesc')}
                </Typography>
                <Box
                  sx={{
                    marginTop: 14,
                    [theme.breakpoints.down('sm')]: {
                      marginTop: 6,
                    },
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: 3,
                      [theme.breakpoints.down('sm')]: {
                        gap: 1,
                      },
                    }}>
                    <LocalPhoneIcon sx={{ fontSize: 35 }} />
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ color: 'white', ':hover': { textDecoration: 'underline' } }}>
                      <Link
                        href="tel:+90 555 555 55 55"
                        target="_blank"
                        style={{ color: 'inherit' }}>
                        +90 555 555 55 55
                      </Link>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: 3,
                      marginTop: 4,
                      [theme.breakpoints.down('sm')]: {
                        gap: 1,
                        marginTop: 3,
                      },
                    }}>
                    <EmailIcon sx={{ fontSize: 35 }} />
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ color: 'white', ':hover': { textDecoration: 'underline' } }}>
                      <Link
                        href="mailto:info@firmadi.com.tr"
                        target="_blank"
                        style={{ color: 'inherit' }}>
                        info@firmadi.com.tr
                      </Link>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: 3,
                      marginTop: 4,
                      [theme.breakpoints.down('sm')]: {
                        gap: 1,
                        marginTop: 3,
                      },
                    }}>
                    <LocationOnIcon sx={{ fontSize: 35 }} />
                    <Typography variant="h6" component="span">
                      Merkez Caddesi Merkez Mahallesi No: 0 Fatih / İstanbul
                    </Typography>
                  </Box>
                </Box>
                <Image
                  alt="Contact SVG"
                  src="/images/contact/Ellipse794.svg"
                  width={100}
                  height={100}
                  sizes={'100%'}
                  style={{ position: 'absolute', bottom: '70px', right: '70px' }}
                />
                <Image
                  alt="Contact SVG"
                  src="/images/contact/Ellipse794.svg"
                  width={250}
                  height={250}
                  sizes={'100%'}
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    transform: 'translate(50%,50%)',
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={7}
              xl={6}
              sx={{
                position: 'relative',
                ':before': {
                  content: '"Harita Yükleniyor..."',
                  position: 'absolute',
                  width: 'calc(100% - 2px)',
                  height: 'calc(100% - 2px)',
                  marginTop: '1px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: '1',
                  outline: '1px solid rgba(0,0,0,0.2)',
                  fontSize: '24px',
                  borderRadius: '0 8px 8px 0',
                },
                [theme.breakpoints.down('md')]: {
                  minHeight: '50vh',
                },
              }}>
              <Box
                sx={{
                  zIndex: '2',
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  [theme.breakpoints.up('sm')]: {
                    borderRadius: '0 8px 8px 0',
                  },
                }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.64616681487!2d28.847373737387183!3d41.00520413827649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1702993753819!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactContainer;
