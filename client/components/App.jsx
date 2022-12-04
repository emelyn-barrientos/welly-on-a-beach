import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BeachList from './BeachList'
import BeachDetails from './BeachDetails'
import WellyWeatherData from './WellyWeatherData'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container } from '@mui/system'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans',
      h1: {
        fontSize: '4rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '0.8rem',
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: '1rem',
      },
    },
  })

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <WellyWeatherData />
          <Routes>
            <Route path="/" element={<BeachList />} />
            <Route path="/beach/:id" element={<BeachDetails />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
