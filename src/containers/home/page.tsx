'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MouseIcon from '@mui/icons-material/Mouse';

function HomeContainer() {
  const theme = useTheme();
  return (
    <>
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
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
          }}>
          <video
            width="100%"
            height="100%"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            autoPlay
            muted
            loop>
            <source src="/images/home/welcome-video.mp4" type="video/mp4" />
          </video>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '4%',
            top: '0',
            width: '40%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              marginTop: 15,
            }}>
            <Typography
              variant="h2"
              component="h6"
              color="whitesmoke"
              sx={{
                borderBottom: '4px solid #BF3131',
                fontFamily: 'fantasy, monospace',
                color: '#F6F1F1',
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>

            <Grid container sx={{ backgroundColor: 'rgba(0, 0, 0,0.2)', borderRadius: 1 }}>
              <Grid item xs={5}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    minHeight: 300,
                    opacity: '0.9',
                  }}>
                  <Image src="/images/home/fires.png" alt="ddd" fill />
                </Box>
              </Grid>
              <Grid item xs={7}>
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
                  <Typography variant="body1" color="white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illum eum,
                    voluptatibus ipsa ratione consectetur perspiciatis maxime illo! Nam beatae
                    quidem maiores sapiente mollitia voluptates cum fugiat eaque corrupti aliquid?
                    Repellendus laudantium consequatur dignissimos consequuntur ut aspernatur!
                    Natus!
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{ marginTop: 2 }}
                    endIcon={<MouseIcon />}>
                    Hizmetleri İncele
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomeContainer;
