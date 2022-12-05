import React from 'react'

import { Card, CardContent, Typography } from '@mui/material'

function ReviewCard(props) {
  const { id, review, date_posted } = props.review

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
            {review}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBlock: 1,
              fontStyle: 'italic',
            }}
          >
            Date post: {date_posted}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ReviewCard
