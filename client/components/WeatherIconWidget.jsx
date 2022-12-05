import React from 'react'
import { chooseIcon } from '../utils'

import { Card } from '@mui/material'

function WeatherIconWidget({ rainRate, cloudCover, size }) {
  const icon = chooseIcon(rainRate, cloudCover)
  return (
    <Card>
      <div
        className="widget-container"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div>{icon}</div>
      </div>
    </Card>
  )
}

export default WeatherIconWidget
