import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import { Typography, Box, Container } from '@mui/material'

import HomeButton from './HomeButton'

function BeachDetails() {
  const { id } = useParams()

  const beaches = useSelector((store) => store.beaches)
  //  const beaches =[{
  //   "id": 1,
  //   "name": "Lyall bay",
  //   "description": "Lyall Bay is a bay and suburb on the south side of the Rongotai isthmus in Wellington, New Zealand. The bay is a popular surf beach, featuring a breakwater at the eastern end.",
  //   "latitude": "41.3291",
  //   "longitude": "174.7953"
  // },
  // {
  //   "id": 2,
  //   "name": "Princess bay",
  //   "description": "Princess Bay is one of the southern beaches of Wellington, New Zealand.",
  //   "latitude": "41.3438",
  //   "longitude": "174.7817"
  // }
  //  ]

  const beach = beaches.find((beach) => beach.id === Number(id))

  return (
    <Container maxWidth="lg">
      <HomeButton />
      <Typography
        variant="h1"
        sx={{
          marginBlock: 4,
          textAlign: 'center',
        }}
      >
        {beach.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBlock: 4,
          textAlign: 'center',
        }}
      >
        <strong>Wind speed: </strong>35 kmph
      </Typography>
      <Box>
        <Typography
          variant="body1"
          sx={{
            marginBlock: 1,
          }}
        >
          {beach.description}
        </Typography>
      </Box>
      <Box
        component="img"
        src={`/images/${id}.jpg`}
        maxWidth="md"
        alt={beach.name}
        sx={{ display: 'flex', justifyContent: 'center', marginBlock: 2 }}
      />
    </Container>
  )
}

export default BeachDetails
