import React from 'react'
import { chooseIcon } from '../utils'

function WeatherIconWidget({ rainRate, cloudCover, size }) {
  const icon = chooseIcon(rainRate, cloudCover)
  return (
    <div
      className="widget-container"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div>{icon}</div>
    </div>
  )
}

export default WeatherIconWidget
