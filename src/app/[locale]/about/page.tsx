import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import hero1 from '@/../public/images/about/heros/hero-1.jpg';

const AboutPage = () => {
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
        }}>
        <Typography
          variant="h1"
          component="span"
          sx={{
            color: '#272829',
            zIndex: '2',
            textTransform: 'uppercase',
            fontWeight: '900',
          }}>
          Hakkımızda
        </Typography>
        <Image
          src="/images/about/bottom-line.svg"
          alt="Line"
          width={400}
          height={50}
          style={{
            zIndex: '2',
          }}
        />
      </Box>
      <Box sx={{ backgroundColor: '#F2F1EB', color: '#272829' }}>
        <Container maxWidth="xl" sx={{ padding: '8rem 0' }}>
          <Typography variant="h4" component="h1" sx={{ textAlign: 'center', fontWeight: '700' }}>
            [Firma Adı] Yangın Söndürme Sistemleri
          </Typography>
          <Grid container sx={{ marginTop: 2 }}>
            <Grid item xs={8} sx={{ margin: '0 auto' }}>
              <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vitae vel ut,
                velit ratione aliquam sed voluptatibus neque ipsum debitis ea, tempora voluptates
                rem labore molestiae dolore, amet nostrum ullam!
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: 10, backgroundColor: '#EAECCC' }}>
            <Grid item xs={6} sx={{ margin: 'auto' }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: '700',
                  borderBottom: '2px solid #EEC759',
                  paddingBottom: 1,
                }}>
                Hakkımızda
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut, temporibus
                praesentium soluta quod totam repudiandae minus aliquam maxime minima quos
                architecto optio rem exercitationem eius laudantium eaque et fugit. Enim quaerat
                facilis sint adipisci libero! Laudantium beatae suscipit atque est adipisci quasi
                molestiae architecto, illum voluptatibus iusto ratione omnis libero ab explicabo
                excepturi laboriosam eius inventore accusantium officia optio?
              </Typography>
            </Grid>
            <Grid
              item
              xs={'auto'}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Box sx={{ position: 'relative', minWidth: 600, minHeight: 400 }}>
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
            }}>
            <Grid
              item
              xs={'auto'}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Box sx={{ position: 'relative', minWidth: 600, minHeight: 400 }}>
                <Image
                  src="/images/about/heros/hero-2.jpg"
                  alt="ddd"
                  fill
                  sizes="100%"
                  style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '8px' }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ margin: 'auto' }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: '700',
                  borderBottom: '2px solid #88AB8E',
                  paddingBottom: 1,
                }}>
                Vizyon & Misyon
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut, temporibus
                praesentium soluta quod totam repudiandae minus aliquam maxime minima quos
                architecto optio rem exercitationem eius laudantium eaque et fugit. Enim quaerat
                facilis sint adipisci libero! Laudantium beatae suscipit atque est adipisci quasi
                molestiae architecto, illum voluptatibus iusto ratione omnis libero ab explicabo
                excepturi laboriosam eius inventore accusantium officia optio?
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ backgroundColor: '#EAECCC' }}>
            <Grid item xs={6} sx={{ margin: 'auto' }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: '700',
                  borderBottom: '2px solid #EEC759',
                  paddingBottom: 1,
                }}>
                Çalışmalarımız
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut, temporibus
                praesentium soluta quod totam repudiandae minus aliquam maxime minima quos
                architecto optio rem exercitationem eius laudantium eaque et fugit. Enim quaerat
                facilis sint adipisci libero! Laudantium beatae suscipit atque est adipisci quasi
                molestiae architecto, illum voluptatibus iusto ratione omnis libero ab explicabo
                excepturi laboriosam eius inventore accusantium officia optio?
              </Typography>
            </Grid>
            <Grid
              item
              xs={'auto'}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Box sx={{ position: 'relative', minWidth: 600, minHeight: 400 }}>
                <Image
                  src="/images/about/heros/hero-1.jpg"
                  alt="ddd"
                  fill
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
