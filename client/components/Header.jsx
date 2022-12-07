import React from 'react'

import { WOABLogo } from './Logo'
import { Link } from 'react-router-dom'

import { Container } from '@mui/material'

function Header() {
  return (
    <Container maxWidth="sm" sx={{ position: 'relative', marginBlock: 8 }}>
      <Link to={'/'}>
        <WOABLogo alt="Wellington on a beach" title="Wellington on a beach" />
      </Link>
    </Container>
  )
}

export default Header
