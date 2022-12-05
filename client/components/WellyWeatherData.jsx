import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWellyUVDataThunk, getWellyWeatherDataThunk } from '../actions'
import { getTime } from '../utils'
import WindWidget from './WindWidget'
import UVWidget from './UVWidget'

function WellyWeatherData() {
  const dispatch = useDispatch()

  // UNCOMMENT THE BELOW AFTER DEVELOPMENT AND DELETE HARD CODED DATA:
  const weatherData = {
    uv: 5,
    metData: {
      airTemp: 15,
      cloudCover: 38,
      windDirection: 349,
      windSpeed: 31,
      rainRate: 0,
    },
  }

  // const weatherData = useSelector((store) => store.weather)

  // useEffect(() => {
  //   const time = getTime()
  //   dispatch(getWellyWeatherDataThunk(time))
  //   dispatch(getWellyUVDataThunk())
  // }, [])

  return (
    <div>
      <div>
        Temperature:{' '}
        {weatherData && weatherData.metData && weatherData.metData.airTemp} C
      </div>
      <div>
        Cloud Cover:{' '}
        {weatherData && weatherData.metData && weatherData.metData.cloudCover} %
      </div>
      {weatherData && weatherData.metData && (
        <WindWidget
          windDirection={
            weatherData &&
            weatherData.metData &&
            weatherData.metData.windDirection
          }
          windSpeed={
            weatherData && weatherData.metData && weatherData.metData.windSpeed
          }
          size="100"
        />
      )}
      <div>
        Rain Rate:{' '}
        {weatherData && weatherData.metData && weatherData.metData.rainRate}{' '}
        mm/h
      </div>
      {weatherData && <UVWidget uv={weatherData.uv} size="100" />}
    </div>
  )
}

export default WellyWeatherData
