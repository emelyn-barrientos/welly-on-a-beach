import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BeachList from './BeachList'
import BeachDetails from './BeachDetails'


function App() {
  return (
    <>
      {/* <Nav/> */}
      <Routes>
        <Route path='/' element={<BeachList/>}/>
        <Route path='/beach/:id' element={<BeachDetails/>}/>
      </Routes>
    </>
  )
}



export default App
