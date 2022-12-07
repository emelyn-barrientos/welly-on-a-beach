import React from 'react'

import { getLocalWellyDate } from '../utils'

import { Card, CardContent, Typography } from '@mui/material'

function ReviewCard(props) {
  const { id, review, date_posted } = props.review

  const wellyDate = getLocalWellyDate(date_posted)

  return (
    <Card
      key={id}
      sx={{
        minWidth: '50%',
        marginBlock: 2,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            marginBlock: 1,
          }}
        >
          {'"' + review + '"'}
        </Typography>
        <br />
        <Typography
          variant="body2"
          sx={{
            marginBlock: 1,
            fontStyle: 'italic',
            fontSize: '0.75rem',
          }}
        >
          Date post: {wellyDate}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ReviewCard
