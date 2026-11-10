
import { createTheme } from '@mui/material/styles';

export const brandColors = {
  cream: '#F7EEE8',
  ivory: '#FFF9F5',
  brown: '#4A3733',
  brownLight: '#755B54',
  dustyRose: '#B48780',
  roseDeep: '#986C68',
  roseLight: '#EAD5CC',
  white: '#FFFFFF',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brandColors.brown,
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.roseDeep,
      contrastText: brandColors.white,
    },
    background: {
      default: brandColors.cream,
      paper: brandColors.ivory,
    },
    text: {
      primary: brandColors.brown,
      secondary: brandColors.brownLight,
    },
    divider: brandColors.roseLight,
  },

  typography: {
    fontFamily: '"DM Sans", sans-serif',

    h1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 300,
      lineHeight: 1.04,
      letterSpacing: '-0.065em',
    },

    button: {
      fontFamily: '"DM Sans", sans-serif',
      textTransform: 'none',
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: brandColors.brown,
          color: brandColors.white,
          '&:hover': {
            backgroundColor: brandColors.roseDeep,
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: brandColors.cream,
        },
      },
    },
  },
});

export default theme;
