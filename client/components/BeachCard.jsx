import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBeachWindDataThunk } from '../actions'
import { getTime } from '../utils'

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
      <li key={id}>
        <p>Wind Speed: {windData && windData[id] && windData[id].windSpeed}</p>
        <p>
          Wind Direction:{' '}
          {windData && windData[id] && windData[id].windDirection}
        </p>
        <img
          src={`/images/${id}.jpg`}
          alt={`${name} on a summer day.`}
          width={'500'}
          height={'300'}
        />
      </li>
    </div>
  )
}

export default BeachCard
