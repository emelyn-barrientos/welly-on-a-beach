import { Container, Typography, List, ListItem, Link } from '@mui/material'

import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone'

import React from 'react'
import HomeButton from './HomeButton'

export default function AboutPage() {
  return (
    <>
      <HomeButton />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBlock: 2,
            alignContent: 'center',
          }}
        >
          About WOAB
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBlock: 1,
          }}
        >
          We all know that you can't beat Wellington on a good day. This app is
          designed to help the user figure out which Wellington beach is the
          best one to go to when the sun is shining...even when it's windy!. The
          app provides the user with a global Wellington weather statistics
          using MetService data and more specific statistics per beach. The app
          can also filter beaches based on what they can provide such as whether
          a beach is good to see sunset or other features.{' '}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            marginBlock: 2,
            alignContent: 'center',
          }}
        >
          About the Team
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBlock: 1,
          }}
        >
          <strong>Welly on a Beach</strong> was created by five aspiring
          developers as their final project for the Hihi 2022 cohort at{' '}
          <a href="https://devacademy.co.nz/" target="_blank" rel="noreferrer">
            Dev Academy Aotearoa
          </a>
          . We've worked diligently on this project and we're excited to share
          the WOAB app to our friends and whānau to show how much we've learned!
        </Typography>

        <Typography
          variant="h3"
          sx={{
            marginBlock: 2,
            alignContent: 'center',
          }}
        >
          The programming aspirants...
        </Typography>

        <Typography
          variant="h4"
          sx={{
            marginBlock: 1,
            alignContent: 'center',
          }}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              color: 'secondary.main',
            }}
          >
            <ListItem>Allie</ListItem>
            <ListItem>Alyssa</ListItem>
            <ListItem>Emelyn</ListItem>
            <ListItem>Kelsey</ListItem>
            <ListItem>Paola</ListItem>
          </List>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginBlock: 0.5,
            alignContent: 'center',
          }}
        >
          Questions? Contact us!
        </Typography>

        <Link href="mailto:emelyn.barrientos22@gmail.com" target="_blank">
          <EmailTwoToneIcon
            sx={{
              display: 'flex',
              marginBlock: 0.5,
              fontSize: '4rem',
            }}
          />
        </Link>
      </Container>
    </>
  )
}
