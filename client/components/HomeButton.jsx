import React from 'react'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Button } from '@mui/material'

function HomeButton() {
  return (
    <Button
      variant="text"
      sx={{ height: 90 }}
      startIcon={<ArrowBackRoundedIcon />}
      href="/"
    >
      Back
    </Button>
  )
}

export default HomeButton
