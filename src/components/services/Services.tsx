import React from 'react';
import { IRootParams } from './types';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlaningImage from '@/../public/images/services/planing.jpg';
import SelectProductImage from '@/../public/images/services/select-product.jpg';
import EducationImage from '@/../public/images/services/education.jpg';

const Services = ({ locale }: IRootParams) => {
  const theme = useTheme();
  const t = useTranslations('Body.Home.Services');
  return (
    <Container
      sx={{
        color: '#3D3B40',
        paddingTop: 10,
        paddingBottom: 10,
        [theme.breakpoints.down('sm')]: { paddingTop: 4, paddingBottom: 4 },
      }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" component="h3" sx={{ fontWeight: 600, marginBottom: 2 }}>
          {t('title')}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            maxWidth: '65%',
            margin: '0 auto',
            color: '#717171',
            [theme.breakpoints.down('sm')]: { maxWidth: '100%' },
          }}>
          {t('desc')}
        </Typography>
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{ padding: '0 12px', [theme.breakpoints.down('sm')]: { padding: 0 } }}>
          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              color: 'white',
              textTransform: 'uppercase',
              backgroundColor: '#CD1818',
              borderRadius: '8px 8px 0 0 ',
              boxShadow: '0 0 4px rgba(0,0,0,0.4)',
              padding: '4px 0',
            }}>
            {t('serviceFirst.title')}
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
            <Image
              src={PlaningImage}
              alt="Planing"
              fill
              placeholder="blur"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '0 0 8px 8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
              }}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              margin: '0 auto',
              backgroundColor: 'rgba(221, 230, 237,0.5)',
              backdropFilter: 'blur(14px)',
              padding: 2,
              borderRadius: 4,
              transform: 'translateY(-50%)',
            }}>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontWeight: 500, textAlign: 'center', color: '#161A30', marginBottom: 2 }}>
              {t('serviceFirst.desc')}
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="text"
                endIcon={<ArrowForwardIosIcon />}
                sx={{ color: '#D83F31', fontWeight: 600 }}>
                <Link href={`${locale}/products`} style={{ color: 'inherit' }}>
                  {t('buttons')}
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            padding: '0 12px',
            [theme.breakpoints.down('sm')]: { padding: 0, transform: 'translateY(-70px)' },
          }}>
          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              color: 'white',
              textTransform: 'uppercase',
              backgroundColor: '#CD1818',
              borderRadius: '8px 8px 0 0 ',
              boxShadow: '0 0 4px rgba(0,0,0,0.4)',
              padding: '4px 0',
            }}>
            {t('serviceSecond.title')}
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
            <Image
              src={SelectProductImage}
              alt="Planing"
              fill
              placeholder="blur"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '0 0 8px 8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
              }}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              margin: '0 auto',
              backgroundColor: 'rgba(221, 230, 237,0.5)',
              backdropFilter: 'blur(14px)',
              padding: 2,
              borderRadius: 4,
              transform: 'translateY(-50%)',
            }}>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontWeight: 500, textAlign: 'center', color: '#161A30', marginBottom: 2 }}>
              {t('serviceSecond.desc')}
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="text"
                endIcon={<ArrowForwardIosIcon />}
                sx={{ color: '#D83F31', fontWeight: 600 }}>
                <Link href={`${locale}/products`} style={{ color: 'inherit' }}>
                  {t('buttons')}
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            padding: '0 12px',
            [theme.breakpoints.down('sm')]: { padding: 0, transform: 'translateY(-140px)' },
          }}>
          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              color: 'white',
              textTransform: 'uppercase',
              backgroundColor: '#CD1818',
              borderRadius: '8px 8px 0 0 ',
              boxShadow: '0 0 4px rgba(0,0,0,0.4)',
              padding: '4px 0',
            }}>
            {t('serviceThird.title')}
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
            <Image
              src={EducationImage}
              alt="Planing"
              fill
              placeholder="blur"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '0 0 8px 8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
              }}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              margin: '0 auto',
              backgroundColor: 'rgba(221, 230, 237,0.5)',
              backdropFilter: 'blur(14px)',
              padding: 2,
              borderRadius: 4,
              transform: 'translateY(-50%)',
            }}>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontWeight: 500, textAlign: 'center', color: '#161A30', marginBottom: 2 }}>
              {t('serviceThird.desc')}
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="text"
                endIcon={<ArrowForwardIosIcon />}
                sx={{ color: '#D83F31', fontWeight: 600 }}>
                <Link href={`${locale}/products`} style={{ color: 'inherit' }}>
                  {t('buttons')}
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
