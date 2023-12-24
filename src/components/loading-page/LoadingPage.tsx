import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <Backdrop
      sx={{
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 99,
        flexDirection: 'column',
      }}
      open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;
