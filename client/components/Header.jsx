import React from 'react'

import { WOABLogo } from './Logo'

import { Container } from '@mui/material'

function Header() {
  return (
    <Container maxWidth="sm" sx={{ position: 'relative', marginBlock: 8 }}>
      <WOABLogo />
    </Container>
  )
}

export default Header
