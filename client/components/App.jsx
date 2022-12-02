import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BeachList from './BeachList'
import BeachDetails from './BeachDetails'
import BeachCard from './BeachCard'

// function App() {
//   return (
//     <div className="app">
//       <h1>Welly on a Beach</h1>
//       <BeachList />
//     </div>
//   )
// }

function App() {
  return (
    <>
      {/* <Nav/> */}
      <Routes>
        <Route path='/' element={<BeachList/>}/>
        <Route path='/beachCard' element={<BeachCard/>}/>
        <Route path='/beachDetails/:id' element={<BeachDetails/>}/>
      </Routes>
    </>
  )
}



export default App
