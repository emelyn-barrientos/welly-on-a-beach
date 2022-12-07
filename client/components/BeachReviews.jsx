import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import { Container } from '@mui/system'
import { Typography } from '@mui/material'

import ReviewCard from './ReviewCard'
import AddReview from './AddReview'

function BeachReviews() {
  const { id } = useParams()

  const beaches = useSelector((store) => store.beaches)

  const beach = beaches.find((beach) => beach.id === Number(id))

  const reviews = beach?.reviews

  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          sx={{
            marginBlock: 2,
          }}
        >
          Leave a beach review!
        </Typography>
        {reviews &&
          reviews.map((review) => {
            return <ReviewCard key={review.id} review={review} />
          })}
        <AddReview />
      </Container>
    </div>
  )
}

export default BeachReviews
