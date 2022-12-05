import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBeachWindDataThunk } from '../actions'
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
  const { id, name, latitude, longitude } = props.beach
  const dispatch = useDispatch()

  const windData = useSelector((store) => store.windData)

  useEffect(() => {
    const time = getTime()
    dispatch(getBeachWindDataThunk(latitude, longitude, time, id))
  }, [])

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} key={id}>
        <Link to={`/beach/${id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={`/images/${id}.jpg`}
              alt={`${name} on a summer day.`}
            />
            <CardContent sx={{ boxShadow: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  marginBlock: 2,
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBlock: 1,
                }}
              >
                Wind Speed: {windData && windData[id] && windData[id].windSpeed}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBlock: 1,
                }}
              >
                Wind Direction:{' '}
                {windData && windData[id] && windData[id].windDirection}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  )
}

export default BeachCard
