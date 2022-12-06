import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'

import { TextField, Button } from '@mui/material'
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
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Add Beach Review"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          name="review"
          value={newReview.review}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AddReview
