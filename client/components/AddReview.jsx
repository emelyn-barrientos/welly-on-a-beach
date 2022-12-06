import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getLocalWellyDate } from '../utils'

// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material'
import { TextField, Button } from '@mui/material'

function AddReview() {
  const [newReview, setNewReview] = useState({
    review: '',
    date_posted: '',
  })

  useEffect(() => {}, [newReview])

  const dispatch = useDispatch()

  const handleChange = (evt) => {
    console.log('target.value: ', evt.target.value)
    setNewReview({
      ...newReview,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    newReview.date_posted = Date.now()
    console.log('newReview: ', newReview)
    //   dispatch(addNewReview(newReview))
    //   setNewReview({
    //     review: '',
    //     date_posted: '',
    //   })
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
