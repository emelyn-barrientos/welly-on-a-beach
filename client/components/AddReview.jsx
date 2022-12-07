import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'

import { TextField, Button, Container } from '@mui/material'
import { addNewReviewThunk } from '../actions'

function AddReview() {
  const { id } = useParams()

  const [newReview, setNewReview] = useState({
    review: '',
    date_posted: '',
  })

  useEffect(() => {}, [newReview])

  const dispatch = useDispatch()

  const handleChange = (evt) => {
    setNewReview({
      ...newReview,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    newReview.date_posted = Date.now()
    newReview.beaches_id = Number(id)
    dispatch(addNewReviewThunk(newReview))
    setNewReview({
      review: '',
      date_posted: '',
    })
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Add Beach Review"
          variant="outlined"
          color="secondary"
          multiline
          margin="dense"
          name="review"
          alignItems="center"
          value={newReview.review}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBlock: 0.5,
            width: '75%',
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default AddReview
