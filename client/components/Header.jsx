import React from 'react'

import { Logo } from './Logo'

import { Container } from '@mui/material'

function Header() {
  return (
    <Container maxWidth="sm" sx={{ position: 'relative', marginBlock: 8 }}>
      <Logo />
    </Container>
  )
}

export default Header
