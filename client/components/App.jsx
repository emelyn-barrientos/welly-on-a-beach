import React from 'react'

import BeachList from './BeachList'
import BeachDetails from './BeachDetails'
import WellyWeatherData from './WellyWeatherData'
import { Container } from '@mui/system'

function App() {
  return (
    <div className="app">
      <Container maxWidth="lg">
        <h1>Welly on a Beach</h1>
        <WellyWeatherData />
        <BeachList />
      </Container>
    </div>
  )
}

export default App
