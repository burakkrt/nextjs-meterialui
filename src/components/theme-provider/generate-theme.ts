import { PaletteMode } from '@mui/material';

const handleGenerateTheme = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ['Alegreya', 'Roboto', '-apple-system'].join(','),
  },
  palette: {
    mode,
    body: {
      ...(mode === 'light'
        ? {
            // palette values for light mode
            test: 'red',
          }
        : {
            // palette values for dark mode
            test: 'yellow',
          }),
    },
  },
});

export default handleGenerateTheme;
