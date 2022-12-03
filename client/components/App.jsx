import React from 'react'

import BeachList from './BeachList'
import BeachDetails from './BeachDetails'
import { Container } from '@mui/system'

function App() {
  return (
    <div className="app">
      <Container maxWidth="lg">
        <h1>Welly on a Beach</h1>
        <BeachList />
      </Container>
    </div>
  )
}

export default App
