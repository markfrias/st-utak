import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#DE0000',
      },
      secondary: {
        main: '#ffbc0d',
      },
    },
    typography: {
      fontFamily: [
        'Open Sans', 'sans-serif', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI'
      ].join(','),
      brand: {
        fontFamily: "'League Gothic', sans-serif",
        fontSize: '2rem'
      },
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold'
      },
      button: {
        textTransform: 'none'
      }
    },

  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
