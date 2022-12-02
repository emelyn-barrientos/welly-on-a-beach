import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BeachCard from './BeachCard'

import { getAllBeachesThunk } from '../actions'

function BeachList() {
  const beaches = useSelector((store) => store.beaches)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBeachesThunk())
  }, [])

  return (
    <div>
      <h1>Beach list is showing...</h1>
      <ul>
        {beaches &&
          beaches.map((beach) => {
            return <BeachCard key={beach.id} beach={beach} />
          })}
      </ul>
    </div>
  )
}

export default BeachList
