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
          This app is designed to help the user figurout which Wellington is
          best for them on a given day. Because we all know Wellington as a
          windy and tempermental city, it is important that our app helps you
          see which beach is best. The app will provide the user global
          Wellington weather statistics and more specific statistics per beach.
          The app can also filter beaches based on what they can provide such as
          whether a beach is good to see sunset or other features.{' '}
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
          Welly on a Beach was created by five aspiring future junior
          developers. We have all been working hard at dev academy and we are
          excited to present this app as our final project.
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
            dense="dense"
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
