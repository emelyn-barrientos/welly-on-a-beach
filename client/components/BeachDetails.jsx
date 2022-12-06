import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import { Typography, Box, Container } from '@mui/material'

import HomeButton from './HomeButton'
import BeachReviews from './BeachReviews'

function BeachDetails() {
  const { id } = useParams()

  const beaches = useSelector((store) => store.beaches)

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

      <a href={beach.location} target="_blank" rel="noreferrer">
        <img
          src={`/images/location${id}.jpg`}
          alt={beach.name}
          width={'90%vw'}
        />
      </a>
      <BeachReviews />
    </Container>
  )
}

export default BeachDetails
