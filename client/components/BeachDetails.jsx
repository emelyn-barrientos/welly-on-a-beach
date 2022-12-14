import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import { Typography, Box, Container, Stack, Chip } from '@mui/material'

import HomeButton from './HomeButton'
import BeachReviews from './BeachReviews'

function BeachDetails() {
  const { id } = useParams()

  const beaches = useSelector((store) => store.beaches)

  const beach = beaches?.find((beach) => beach.id === Number(id))

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box m={1} display="flex" justifyContent={'center'} gap={4}>
        <HomeButton />
        <Typography
          variant="h1"
          sx={{
            marginBlock: 2,
            alignContent: 'center',
          }}
        >
          {beach.name}
        </Typography>
      </Box>
      <Typography variant="h5" padding={2} align="center">
        Beach features
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        mb={5}
        sx={{ rowGap: 0.5 }}
      >
        {beach &&
          beach?.features?.map((feature) => {
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
          {beach?.description}
        </Typography>
      </Box>

      <Box
        component="img"
        src={`/images/${id}.jpg`}
        maxWidth="md"
        alt={beach.name}
        sx={{
          margin: 'auto',
          marginBlock: 2,
          borderRadius: '0.5rem',
          minWidth: 'xs',
          maxWidth: 'sm',
          boxShadow: 1,
        }}
      />

      <Box
        sx={{
          margin: 'auto',
        }}
      >
        <a href={beach.location} target="_blank" rel="noreferrer">
          <Box
            component="img"
            src={`/images/location${id}.jpg`}
            alt={`Link to ${beach.name} map.`}
            sx={{
              marginBlock: 2,
              borderRadius: '0.5rem',
              minWidth: 'xsx',
              maxWidth: 'sm',
              boxShadow: 1,
            }}
          />
        </a>
      </Box>
      <BeachReviews />
    </Container>
  )
}

export default BeachDetails
