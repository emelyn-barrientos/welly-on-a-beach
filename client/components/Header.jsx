import React from 'react'

import { WOABLogo } from './Logo'
import { MobileWOABLogo } from './MobileLogo'
import { Link } from 'react-router-dom'

import { Container } from '@mui/material'

function Header() {
  return (
    <>
      <Container
        margin={2}
        maxWidth="sm"
        align="center"
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Link to={'/'}>
          <MobileWOABLogo />
        </Link>
      </Container>
      <Container
        margin={2}
        maxWidth="lg"
        align="center"
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Link to={'/'}>
          <WOABLogo />
        </Link>
      </Container>
    </>
  )
}

export default Header
