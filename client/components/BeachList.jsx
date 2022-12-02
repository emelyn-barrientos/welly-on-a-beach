import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllBeachesThunk } from '../actions'

function BeachList() {
  const beaches = useSelector((state) => state.beaches)

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
            return <li>each beach</li>
          })}
      </ul>
    </div>
  )
}

export default BeachList
