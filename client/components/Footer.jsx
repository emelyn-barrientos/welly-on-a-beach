import React from 'react'
import { Box, display } from '@mui/system'
import { Link, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import Sunset from '../../server/public/svg/Sunset 100px.svg'

export default function Footer() {
  return (
    <Box
      mt={6}
      sx={{
        height: 300,
        bottom: 0,
        width: '100%',
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Link href="/about">
          <Typography py={6} variant="h6">
            About WOAB
          </Typography>
        </Link>
        <Sunset />
        <Typography variant="subtitle2">Copyright WOAB 2022 &copy;</Typography>
      </Box>
    </Box>
  )
}
