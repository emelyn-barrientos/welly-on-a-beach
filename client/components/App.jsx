import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BeachList from './BeachList'
import BeachDetails from './BeachDetails'
import WellyWeatherData from './WellyWeatherData'
import { Container } from '@mui/system'


function App() {
  return (
    <div className="app">
      <Container maxWidth="lg">
        <WellyWeatherData /> 
        <Routes>
          <Route path='/' element={<BeachList/>}/>
          <Route path='/beach/:id' element={<BeachDetails/>}/>
        </Routes>
      </Container>
    </div>
  )
}

export default App
