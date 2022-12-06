import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBeachWindDataThunk, getBeachFeaturesThunk } from '../actions'
import { getTime } from '../utils'
import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from '@mui/material'

function BeachCard(props) {
  const { id, name, features } = props.beach
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBeachFeaturesThunk(id))
  }, [])

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} key={id}>
        <CardActionArea component={Link} to={`/beach/${id}`}>
          <CardMedia
            component="img"
            height="250"
            image={`/images/${id}.jpg`}
            alt={`${name} on a summer day.`}
          />
          <CardContent>
            <Typography
              color="secondary"
              variant="h3"
              sx={{
                marginBlock: 1.5,
              }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default BeachCard
