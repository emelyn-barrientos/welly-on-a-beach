import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#273469',
      light: '#565D97',
      dark: '#000E3E',
    },
    secondary: {
      main: '#0378CD',
      light: '#6BC7FF',
      dark: '#0069bd',
      contrastText: '#fff',
    },
    background: {
      default: '#fafaff',
    },
    text: {
      primary: '#273469',
      secondary: '#273469',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 800,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '.8rem',
      fontWeight: 400,
    },
  },
})

export default theme
