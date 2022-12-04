import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBeachWindDataThunk } from '../actions'
import { getTime } from '../utils'
import { Link } from 'react-router-dom'

import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material'

function BeachCard(props) {
  const { id, name, latitude, longitude } = props.beach
  const dispatch = useDispatch()

  // UNCOMMENT BELOW AND DELETE HARD CODED DATA AFTER DEVELOPMENT COMPLETE.
  // const windData = useSelector((store) => store.windData)
  const windData = {
    1: {
      windSpeed: 4.5766306,
      windDirection: 358.4376,
    },
    2: {
      windSpeed: 4.856751,
      windDirection: 357.97202,
    },
    3: {
      windSpeed: 4.0311227,
      windDirection: 359.65985,
    },
    4: {
      windSpeed: 3.9822397,
      windDirection: 0.53644973,
    },
  }

  useEffect(() => {
    const time = getTime()
    // UNCOMMENT BELOW AFTER DEVELOPMENT COMPLETE: Dispatch commented out to minimise api calls and replaced with hard coded data.
    // dispatch(getBeachWindDataThunk(latitude, longitude, time, id))
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
              <p>{name}</p>
              <p>
                Wind Speed: {windData && windData[id] && windData[id].windSpeed}
              </p>
              <p>
                Wind Direction:{' '}
                {windData && windData[id] && windData[id].windDirection}
              </p>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  )
}

export default BeachCard
