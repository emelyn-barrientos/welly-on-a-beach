import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWellyUVDataThunk, getWellyWeatherDataThunk } from '../actions'
import { getTime, getTimeForUV } from '../utils'
import WindWidget from './WindWidget'
import TempWidget from './TempWidget'
import UVWidget from './UVWidget'
import WindSpeedWidget from './WindSpeedWidget'
import WeatherIconWidget from './WeatherIconWidget'
import { Typography, Card } from '@mui/material'

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
      <Card
        sx={{
          backgroundColor: 'rgba(26, 150, 240, 0.3)',
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        <Typography variant="h4" color="initial" align="center" marginTop={1}>
          Current Welly Weather
        </Typography>
        <div className="welly-weather-widgets">
          {weatherData && weatherData.metData && (
            <TempWidget temp={weatherData.metData.airTemp} size="150" />
          )}
          {weatherData && weatherData.metData && (
            <WeatherIconWidget
              rainRate={weatherData.metData.rainRate}
              cloudCover={weatherData.metData.cloudCover}
              size="150"
            />
          )}
          {weatherData && weatherData.metData && (
            <WindWidget
              windDirection={weatherData.metData.windDirection}
              size="100"
            />
          )}
          {weatherData && weatherData.metData && (
            <WindSpeedWidget windSpeed={weatherData.metData.windSpeed} />
          )}
          {weatherData && <UVWidget uv={weatherData.uv} size="100" />}
        </div>
      </Card>
    </>
  )
}

export default WellyWeatherData
