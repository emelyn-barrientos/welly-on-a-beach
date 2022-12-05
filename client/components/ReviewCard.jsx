import React from 'react'

import { getLocalWellyDate } from '../utils'

import { Card, CardContent, Typography } from '@mui/material'

function ReviewCard(props) {
  const { id, review, date_posted } = props.review

  const wellyDate = getLocalWellyDate(date_posted)
  console.log(wellyDate)

  return (
    <div>
      <Card
        key={id}
        sx={{
          maxWidth: '90%',
          marginBlock: 2,
        }}
      >
        <CardContent
          sx={{
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
    </div>
  )
}

export default ReviewCard
