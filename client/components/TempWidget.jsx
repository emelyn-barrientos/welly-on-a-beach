import React from 'react'

import { Card } from '@mui/material'

function TempWidget({ temp, size }) {
  return (
    <div
      className="widget-container"
      style={{ width: `${size * 0.8}px`, height: `${size * 0.8}px` }}
    >
      <div className="temp-container">
        <div className="temp-text" style={{ fontSize: `${size * 0.4}px` }}>
          {temp}
        </div>
        <div className="degrees-text" style={{ fontSize: `${size * 0.25}px` }}>
          °C
        </div>
      </div>
    </div>
  )
}

export default TempWidget
