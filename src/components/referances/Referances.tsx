import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

const Referances = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: 0 }}>
      <Grid
        container
        sx={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(243,248,255,1) 100%)',
          justifyContent: 'center',
          padding: '3rem 0',
          [theme.breakpoints.down('sm')]: {
            padding: '2rem 0',
          },
        }}>
        <Grid item xs={12} sm={6} lg={4} xl={2}>
          <Box
            sx={{
              position: 'relative',
              width: 250,
              height: 145,
              margin: '0 auto',
              [theme.breakpoints.down('sm')]: {
                width: 200,
                height: 125,
                margin: '1rem auto',
              },
            }}>
            <Image
              src="/images/referances/gepkagit-logo.png"
              alt="Gep Kağıt Logo"
              fill
              sizes="100%"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                WebkitFilter: 'grayscale(100%)',
                filter: 'grayscale(100%)',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={2}>
          <Box
            sx={{
              position: 'relative',
              width: 250,
              height: 145,
              margin: '0 auto',
              [theme.breakpoints.down('sm')]: {
                width: 200,
                height: 125,
                margin: '1rem auto',
              },
            }}>
            <Image
              src="/images/referances/DOĞA-KOLEJİ.png"
              alt="Gep Kağıt Logo"
              fill
              sizes="100%"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                WebkitFilter: 'grayscale(100%)',
                filter: 'grayscale(100%)',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Referances;
