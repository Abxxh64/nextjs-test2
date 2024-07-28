'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { 
      main: '#23A6F0',
      light: '#E8F1FF',
      dark: '#A1C0F1',
    },
    secondary: {
        main: '#252B42'
    },
    text: {
        primary: '#252B42',
        secondary: '#737373',

    }
  },
  typography: {
    fontFamily: 'Montserrat, roboto, sans-serif',
  }
});

export default theme;