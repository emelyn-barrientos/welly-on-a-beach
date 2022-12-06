import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BeachList from './BeachList'
import BeachDetails from './BeachDetails'
import WellyWeatherData from './WellyWeatherData'
import Header from './Header'
import theme from '../styles/themes'
import AboutPage from './AboutPage'


import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CSSVarsProvider } from '@mui/material/styles'
import { Container } from '@mui/system'

function App() {
  return (
    <div className="app">
      <CSSVarsProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <WellyWeatherData />
          {/* <About /> */}
          <Routes>
            <Route path="/" element={<BeachList />} />
            <Route path="/beach/:id" element={<BeachDetails />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Container>
      </CSSVarsProvider>
    </div>
  )
}

export default App
