import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import { Typography, Box, Container, Stack, Chip } from '@mui/material'

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
        align="center"
        sx={{
          marginBlock: 2,
          textAlign: 'center',
        }}
      >
        {beach.name}
      </Typography>

      <Typography variant="h5" padding={2} textAlign="center">
        Beach features
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        mb={5}
        sx={{ rowGap: 0.5 }}
      >
        {beach.features.map((feature) => {
          return <Chip key={feature} label={feature} clickable={false} />
        })}
      </Stack>

      <Box>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            marginBlock: 1,
          }}
        >
          {beach.description}
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Box
          component="img"
          src={`/images/${id}.jpg`}
          maxWidth="md"
          alt={beach.name}
          sx={{
            display: 'flex',
            marginBlock: 2,
            marginRight: '0rem',
            borderRadius: '0.5rem',
            maxWidth: 'sm',
          }}
        />

        <a href={beach.location} target="_blank" rel="noreferrer">
          <Box
            component="img"
            src={`/images/location${id}.jpg`}
            alt={`Link to ${beach.name} map.`}
            sx={{
              display: 'flex',
              borderRadius: '0.5rem',
              marginBlock: 2,
              marginRight: '0rem',
              maxWidth: 'sm',
            }}
          ></Box>
        </a>
      </Container>

      <BeachReviews />
    </Container>
  )
}

export default BeachDetails
