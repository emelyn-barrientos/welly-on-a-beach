import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BeachCard from './BeachCard'

import Grid from '@mui/material/Unstable_Grid2'

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
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 5, md: 7 }}
        columns={{ xs: 8, sm: 10, lg: 12 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {beaches &&
          beaches.map((beach) => {
            return (
              <Grid key={beach.id} xs={8} sm={5} md={4} lg={4}>
                <BeachCard beach={beach} />
              </Grid>
            )
          })}
      </Grid>
    </div>
  )
}

export default BeachList