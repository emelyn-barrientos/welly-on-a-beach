import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWellyWeatherDataThunk } from '../actions'
import { getTime } from '../utils'

export default function WellyWeatherData() {
  const dispatch = useDispatch()

  // UNCOMMENT THE BELOW AFTER DEVELOPMENT AND DELETE HARD CODED DATA:
  const weatherData = {
    airTemp: 16,
    cloudCover: 0,
    windDirection: 313,
    windSpeed: 12,
  }
  // const weatherData = useSelector((store) => store.weather)

  // useEffect(() => {
  //   const time = getTime()
  //   dispatch(getWellyWeatherDataThunk(time))
  // }, [])

  return (
    <>
      <div>{weatherData && weatherData.airTemp} C</div>
      <div>{weatherData && weatherData.cloudCover} %</div>
      <div>{weatherData && weatherData.windSpeed} km/h</div>
    </>
  )
}
