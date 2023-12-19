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
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
          filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.5))',
        },
      }}>
      <FooterHero />
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <Box
              component="div"
              sx={{
                [theme.breakpoints.up('md')]: {
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  borderRadius: 1,
                  padding: 4,
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
                HAKKIMIZDA
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tenetur repellat
                necessitatibus quam quo expedita veritatis magni, quos laboriosam a corporis,
                deserunt, eligendi cumque eos aliquid in soluta unde? Reprehenderit nostrum qui
                voluptates asperiores quibusdam fugiat debitis possimus molestias tempore!
              </Typography>
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
              <LocationOnIcon sx={{ [theme.breakpoints.up('sm')]: { fontSize: 35 } }} />
              <Typography
                color="inherit"
                variant="h6"
                sx={{
                  textDecoration: 'none',
                }}>
                Merkez Caddesi Merkez Mahallesi No 0 Fatih/İstanbul
              </Typography>
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
