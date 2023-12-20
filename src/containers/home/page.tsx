'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
              backgroundColor: 'rgba(0,0,0,0.3)',
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
            right: '10%',
            top: '0',
            width: '30%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <Box>
            <Typography
              variant="h3"
              component="h6"
              color="whitesmoke"
              sx={{ textAlign: 'center', fontWeight: '900' }}>
              YANGIN SÖNDÜRME CİHAZLARI
            </Typography>
            <Typography variant="body1" color="white" sx={{ textAlign: 'center' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, impedit?
              Exercitationem, ipsam sint. Enim eius libero itaque? Deleniti nisi laborum praesentium
              iste repellendus corrupti? Similique possimus atque repellendus omnis est.
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', width: 500, height: 370, opacity: '0.9' }}>
            <Image src="/images/home/fires.png" alt="ddd" fill />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomeContainer;
