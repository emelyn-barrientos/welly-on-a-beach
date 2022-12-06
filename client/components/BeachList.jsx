import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BeachCard from './BeachCard'

import Grid from '@mui/material/Unstable_Grid2'

import { getAllBeachesThunk } from '../actions'
import { Typography } from '@mui/material'
import ChipFilter from './ChipFilter'

function BeachList() {
  // const beaches = useSelector((store) => store.beaches)
  const [selectedChips, updateSelectedChips] = useState([])
  const beaches = [
    {
      id: 1,
      name: 'Lyall Bay',
      description:
        'Lyall Bay is a bay and suburb on the south side of the Rongotai isthmus in Wellington, New Zealand. The bay is a popular surf beach, featuring a breakwater at the eastern end.',
      latitude: '-41.3291',
      longitude: '174.7953',
      orientation: '160',
      reviews: [
        {
          id: 100,
          beaches_id: 1,
          date_posted: 1670296246125,
          review:
            'Lyall Bay is the BEST beach for surfing! Highly recommed checking this beach out.',
        },
      ],
      features: ['showers', 'playground'],
    },
    {
      id: 2,
      name: 'Princess Bay',
      description:
        'Princess Bay has a sheltered sandy beach and is a popular place to swim in summer. Tucked between Houghton Bay’s headland and Te Raekaihau Point, it has good views of Taputeranga Island. On a clear day you can see the peaks of the Kaikoura Range in the South Island. The bay is part of the Taputeranga Marine Reserve, which aims to return the marine habitats to a more natural state and increase the size and abundance of fish.',
      latitude: '-41.3438',
      longitude: '174.7817',
      orientation: '225',
      reviews: [
        {
          id: 101,
          beaches_id: 2,
          date_posted: 1670296246125,
          review: 'This beach is fantastic for having fire pit with friends.',
        },
      ],
      features: ['showers', 'playground'],
    },
    {
      id: 3,
      name: 'Oriental Bay',
      features:
        'Southerly protected beach where you may get lots of sun. It is very picturesque and good for socialising.',
      description:
        'Oriental Bay is a bay and suburb of Wellington, the capital city of New Zealand. Noted for being both a popular beach and a luxurious centre of affluence in the city, it is located close to the Central Business District on Wellington Harbour.',
      latitude: '-41.2916',
      longitude: '174.7929',
      orientation: '0',
      reviews: [],
    },
    {
      id: 4,
      name: 'Scorching Bay',
      features:
        'Northerly protected beach that is good for swimming as it is highly protected. This beach may see the sunrise over the hills and there is space for a picnic.',
      description:
        'This popular sandy inner-harbour bathing beach has a large grassed area and is sheltered from the northerly wind. It is a great place to soak up the sun and watch ships entering and leaving the harbour.',
      latitude: '-41.2972',
      longitude: '174.8333',
      orientation: '125',
      reviews: [],
    },
  ]
  const [filteredBeaches, updateFilteredBeaches] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBeachesThunk())
    updateFilteredBeaches([...beaches])
  }, [])

  useEffect(() => {
    updateFilteredBeaches(
      beaches.filter((beach) => {
        for (const feature of beach.features) {
          if (selectedChips.includes(feature)) {
            return true
          } else {
            return false
          }
        }
      })
    )
    // Filter by selectedChips...
    // Need database stuff before testing thiss
    // const filteredBeaches = beaches.filter()
  }, [selectedChips])

  return (
    <div>
      <Typography
        sx={{
          marginBlock: 4,
          textAlign: 'center',
        }}
        variant="h2"
      >
        Wellington beaches
      </Typography>
      <ChipFilter
        features={['showers', 'playground']}
        updateSelected={updateSelectedChips}
        selected={selectedChips}
      />
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
