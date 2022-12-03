import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBeachWindDataThunk } from '../actions'
import { getTime } from '../utils'

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
