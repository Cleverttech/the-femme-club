import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#674A44', contrastText: '#FFF9F5' },
    secondary: { main: '#B48780' },
    background: { default: '#F7EEE8', paper: '#FFF9F5' },
    text: { primary: '#4A3733', secondary: '#806760' },
  },
  typography: {
    fontFamily: '"DM Sans", Arial, sans-serif',
    h1: { fontFamily: '"Italiana", Georgia, serif', fontWeight: 400 },
    h2: { fontFamily: '"Italiana", Georgia, serif', fontWeight: 400 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 4, boxShadow: 'none' } } },
    MuiIconButton: { styleOverrides: { root: { color: '#674A44' } } },
  },
});
