'use client';
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { default as NextLink } from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import { IRootParams } from './types';
import SelectLanguage from '../select-language/SelectLanguage';
import { usePathname } from 'next/navigation';
import { Theme } from '@mui/material/styles';
import footerHero from '@/../public/images/footer/footer-hero.jpg';

function FooterHero({ theme }: { theme: Theme }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '15%',
        top: '-25%',
        width: '375px',
        height: '375px',
        ':after': {
          content: '""',
          position: 'absolute',
          top: '-7%',
          left: '-7%',
          display: 'block',
          width: '114%',
          height: '114%',
          borderRadius: '50%',
          backgroundColor: '#9A031E',
          zIndex: '-1',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
          display: 'block',
          width: '275px',
          height: '275px',
          right: '10%',
          top: '-20%',
        },
        [theme.breakpoints.down('lg')]: {
          display: 'none',
        },
      }}>
      <Image
        src={footerHero}
        alt="Footer Hero"
        fill
        placeholder="blur"
        sizes="100%"
        style={{ borderRadius: '50%', backgroundColor: 'white' }}
      />
    </Box>
  );
}

const FooterPage = ({ locale, langHeader: pages, langFooter }: IRootParams) => {
  const theme = useTheme();
  const pathname = usePathname();
  const { copyright, contactTitle } = langFooter;

  return (
    <Box
      sx={{
        color: '#f3f3f3',
        minHeight: '15rem',
        padding: '4rem 0',
        backgroundImage: `url("/images/footer/footer-back.svg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('sm')]: {
          position: 'relative',
          marginTop: 25,
          filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.5))',
        },
        [theme.breakpoints.up('lg')]: {
          padding: '8rem 0 4rem 0',
        },
        [theme.breakpoints.between('sm', 'lg')]: {
          padding: '6rem 0 4rem 0',
        },
      }}>
      <FooterHero theme={theme} />
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} xl={5}>
            <Box
              component="div"
              sx={{
                width: '100%',
                height: '100%',
                minHeight: '250px',
                border: '8px solid #BF3131',
                borderRadius: '4px',
                [theme.breakpoints.up('lg')]: {
                  minHeight: '350px',
                },
                [theme.breakpoints.between('sm', 'lg')]: {
                  minHeight: '350px',
                },
              }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.64616681487!2d28.847373737387183!3d41.00520413827649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1702993753819!5m2!1str!2str"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ borderRadius: '0px' }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}></iframe>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            xl={5}
            sx={{
              marginTop: 4,
              [theme.breakpoints.up('lg')]: {
                paddingLeft: 4,
              },
            }}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                display: 'block',
                position: 'relative',
                textAlign: 'center',
                paddingBottom: 2,
                marginBottom: 2,
                ':after': {
                  content: '""',
                  position: 'absolute',
                  display: 'block',
                  left: 0,
                  bottom: 0,
                  minWidth: 100,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'white',
                  [theme.breakpoints.up('lg')]: {
                    width: '30%',
                  },
                },
                [theme.breakpoints.up('lg')]: {
                  display: 'inline-block',
                  paddingBottom: 1,
                },
              }}>
              {contactTitle.toLocaleUpperCase('tr-TR')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 2,
                marginTop: 2,
              }}>
              <LocalPhoneIcon sx={{ [theme.breakpoints.up('sm')]: { fontSize: 35 } }} />
              <Link
                href="tel:+90 555 555 55 55"
                title="Phone number"
                target="_blank"
                color="inherit"
                variant="h6"
                sx={{
                  textDecoration: 'none',
                }}>
                +90 555 555 55 55
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 2,
                marginTop: 3,
              }}>
              <EmailIcon sx={{ [theme.breakpoints.up('sm')]: { fontSize: 35 } }} />
              <Link
                href="mailto:info@firmadi.com.tr"
                title="Mail adress"
                target="_blank"
                color="inherit"
                variant="h6"
                sx={{
                  textDecoration: 'none',
                }}>
                info@firmadi.com.tr
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 2,
                marginTop: 3,
              }}>
              <LocationOnIcon sx={{ [theme.breakpoints.up('sm')]: { fontSize: 35 } }} />
              <Typography color="inherit" variant="h6" component="span">
                Merkez Caddesi Merkez Mahallesi No: 0 Fatih / İstanbul
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 5, textAlign: 'end' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                [theme.breakpoints.up('lg')]: {
                  flexDirection: 'row',
                },
              }}>
              <Typography
                variant="body1"
                component="span"
                sx={{
                  [theme.breakpoints.down('lg')]: {
                    order: '2',
                  },
                }}>
                {new Date().getFullYear()} © Firma Adı A.Ş. | {copyright}
              </Typography>
              {<SelectLanguage locale={locale} pathname={pathname} />}
              <Stack direction="row" spacing={{ xs: 2, sm: 4 }}>
                {pages.slice(0, 4).map((page, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    noWrap
                    component="span"
                    sx={{
                      ':hover': { fontWeight: '900' },
                      fontWeight: '450',
                    }}>
                    <NextLink
                      key={index}
                      href={'/' + (locale && locale) + page.path}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      title={page.label}>
                      {page.label.toLocaleUpperCase('tr-TR')}
                    </NextLink>
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterPage;
