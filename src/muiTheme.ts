// theme.ts
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    primary: {
      // main: '#61ff7bff', 
      main: '#f95738', 
    },
    secondary: {
      main: '#6B5B95', 
    },
    text: {
      primary: '#333333', // dark for readability
      secondary: '#555555',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.25rem',
    },
    body2: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
