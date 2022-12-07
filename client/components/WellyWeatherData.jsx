import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWellyUVDataThunk, getWellyWeatherDataThunk } from '../actions'
import { getTime, getTimeForUV } from '../utils'
import WindWidget from './WindWidget'
import TempWidget from './TempWidget'
import UVWidget from './UVWidget'
import WeatherIconWidget from './WeatherIconWidget'

function WellyWeatherData() {
  const dispatch = useDispatch()

  const weatherData = useSelector((store) => store.weather)

  useEffect(() => {
    const time = getTime()
    const uvTime = getTimeForUV()
    dispatch(getWellyWeatherDataThunk(time))
    dispatch(getWellyUVDataThunk(uvTime))
  }, [])

  return (
    <>
      <div className="welly-weather-widget">
        {weatherData && weatherData.metData && (
          <WeatherIconWidget
            rainRate={weatherData.metData.rainRate}
            cloudCover={weatherData.metData.cloudCover}
            size="100"
          />
        )}
        {weatherData && weatherData.metData && (
          <TempWidget temp={weatherData.metData.airTemp} size="100" />
        )}
        {weatherData && weatherData.metData && (
          <WindWidget
            windDirection={
              weatherData &&
              weatherData.metData &&
              weatherData.metData.windDirection
            }
            windSpeed={
              weatherData &&
              weatherData.metData &&
              weatherData.metData.windSpeed
            }
            size="100"
          />
        )}
        {weatherData && <UVWidget uv={weatherData.uv} size="100" />}
      </div>
    </>
  )
}

export default WellyWeatherData
