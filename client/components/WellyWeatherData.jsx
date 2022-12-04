import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWellyUVThunk, getWellyWeatherDataThunk } from '../actions'
import { getTime } from '../utils'

function WellyWeatherData() {
  const dispatch = useDispatch()

  // UNCOMMENT THE BELOW AFTER DEVELOPMENT AND DELETE HARD CODED DATA:
  const weatherData = {
    airTemp: 14,
    cloudCover: 2,
    windDirection: 17,
    windSpeed: 15,
    rainRate: 0,
    uv: 7,
  }
  // const weatherData = useSelector((store) => store.weather.data)

  // useEffect(() => {
  //   const time = getTime()
  //   dispatch(getWellyWeatherDataThunk(time))
  //   dispatch(getWellyUVThunk())
  // }, [])

  return (
    <>
      <div>Temperature: {weatherData && weatherData.airTemp} C</div>
      <div>Cloud Cover: {weatherData && weatherData.cloudCover} %</div>
      <div>Wind Speed: {weatherData && weatherData.windSpeed} km/h</div>
      <div>Rain Rate: {weatherData && weatherData.rainRate} mm/h</div>
      <div>UV: {weatherData && weatherData.uv}</div>
    </>
  )
}

export default WellyWeatherData
