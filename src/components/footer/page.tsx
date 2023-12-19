'use client';
import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LastPageIcon from '@mui/icons-material/LastPage';

const footerBackImageUrl = '/images/footer-back.svg';
const footerHeroImageUrl = '/images/footer-hero-2.png';

function FooterHero() {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '15%',
        top: '-30%',
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
        // ':before': {
        //   content: '""',
        //   position: 'absolute',
        //   top: '-14%',
        //   left: '-14%',
        //   display: 'block',
        //   width: '128%',
        //   height: '128%',
        //   borderRadius: '50%',
        //   backgroundColor: '#9A031E',
        //   opacity: '0.2',
        //   zIndex: '-2',
        // },
      }}>
      <Image
        src={footerHeroImageUrl}
        alt="Footer Hero"
        fill
        sizes="100%"
        style={{ borderRadius: '50%', backgroundColor: 'white' }}
      />
    </Box>
  );
}

const FooterPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        color: '#f3f3f3',
        minHeight: '15rem',
        padding: '8rem 0 4rem 0',
        backgroundImage: `url(${footerBackImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('sm')]: {
          position: 'relative',
          marginTop: 25,
          zIndex: '-3',
          filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.5))',
        },
      }}>
      <FooterHero />
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <Box
              sx={{
                [theme.breakpoints.up('md')]: {
                  minHeight: '350px',
                  height: '100%',
                  position: 'relative',
                  ':after': {
                    content: '""',
                    position: 'absolute',
                    display: 'block',
                    top: '-15px',
                    left: '-15px',
                    width: 'calc(100% + 30px)',
                    height: 'calc(100% + 30px)',
                    backgroundColor: '#820300',
                    zIndex: '-2',
                    borderRadius: '4px',
                  },
                },
              }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.64616681487!2d28.847373737387183!3d41.00520413827649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1702993753819!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: '0', borderRadius: '4px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              [theme.breakpoints.up('sm')]: {
                marginLeft: 10,
              },
            }}>
            <Typography
              variant="h4"
              sx={{
                display: 'inline-block',
                position: 'relative',
                paddingBottom: 2,
                marginBottom: 2,
                ':after': {
                  content: '""',
                  position: 'absolute',
                  display: 'block',
                  left: 0,
                  bottom: 0,
                  minWidth: 100,
                  width: '30%',
                  height: '2px',
                  backgroundColor: 'white',
                },
              }}>
              İLETİŞİM
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 2,
                [theme.breakpoints.up('sm')]: {
                  marginTop: 2,
                },
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
                [theme.breakpoints.up('sm')]: {
                  marginTop: 3,
                },
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
                [theme.breakpoints.up('sm')]: {
                  marginTop: 3,
                },
              }}>
              <LastPageIcon sx={{ [theme.breakpoints.up('sm')]: { fontSize: 35 } }} />
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
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 5, textAlign: 'end' }}>
            <Typography variant="body1" component="span">
              {new Date().getFullYear()} © Firma Adı A.Ş. | Tüm Hakları Saklıdır.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterPage;
