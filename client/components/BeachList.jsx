import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BeachCard from './BeachCard'
import About from './About'

import Grid from '@mui/material/Unstable_Grid2'

import { getAllBeachesThunk } from '../actions'
import { Typography } from '@mui/material'
import ChipFilter from './ChipFilter'

function BeachList() {
  const beaches = useSelector((store) => store.beaches)
  const [selectedChips, updateSelectedChips] = useState([])
  const [filteredBeaches, updateFilteredBeaches] = useState([])
  const features = [
    'playground',
    'swimming',
    'alcohol allowed',
    'accessible',
    'dogs allowed off lead',
    'nearby cafe',
    'sheltered from northerlies',
    'car parking',
    'bike parking',
    'changing rooms',
    'showers',
    'toilet',
    'surfing',
    'kayaking',
    'windsurfing',
    'surf lifesaving club',
    'picnic tables',
    'nude area',
    'dogs allowed on lead',
    'marine reserve',
    'sheltered from southerlies',
    'fires allowed by permit',
    'sunset viewing',
    'diving',
    'bbq',
    'swim raft',
    'sandy beach',
  ]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBeachesThunk())
  }, [])

  useEffect(() => {
    updateFilteredBeaches(beaches)
  }, [beaches])

  function beachFilter(beaches, selectedChips) {
    const filteredBeaches = [...beaches]
    for (const beach of beaches) {
      for (const feature of selectedChips) {
        if (!beach.features.includes(feature)) {
          const index = filteredBeaches.indexOf(beach)
          if (index > -1) {
            filteredBeaches.splice(index, 1)
          }
        }
      }
    }
    return filteredBeaches
  }

  useEffect(() => {
    updateFilteredBeaches(beachFilter(beaches, selectedChips))
  }, [selectedChips])

  return (
    <div>
      <About />
      <Typography
        sx={{
          marginBlock: 2,
          textAlign: 'center',
        }}
        variant="h2"
      >
        Wellington beaches
      </Typography>
      <Typography
        px={2}
        pb={0.5}
        sx={{
          textAlign: 'center',
        }}
        variant="h4"
      >
        Beach features
      </Typography>
      <Typography
        px={2}
        pb={2}
        sx={{
          textAlign: 'center',
        }}
        variant="body2"
      >
        Click the chips to filter the beach list to show beaches with specific
        features.
      </Typography>
      {features && (
        <ChipFilter
          features={features}
          updateSelected={updateSelectedChips}
          selected={selectedChips}
        />
      )}
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 5, md: 7 }}
        columns={{ xs: 8, sm: 10, lg: 12 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {filteredBeaches &&
          filteredBeaches.map((beach) => {
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
