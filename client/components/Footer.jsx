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
      <Grid2
        container
        columns={56}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
        <Grid2 md={12}>
          <Link href="/about">
            <Typography py={2} variant="h6">
              About WOAB
            </Typography>
          </Link>
        </Grid2>
        <Grid2>
          <Typography variant="subtitle2">
            Copyright WOAB 2022 &copy;
          </Typography>
        </Grid2>
      </Grid2>
      <Box display="flex" justifyContent="center">
        <Sunset />
      </Box>
    </Box>
  )
}
