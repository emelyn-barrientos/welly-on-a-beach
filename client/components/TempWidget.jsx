import React from 'react'

import { Card } from '@mui/material'

function TempWidget({ temp, size }) {
  return (
    <Card>
      <div
        className="widget-container"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div className="temp-container">
          <div className="temp-text" style={{ fontSize: `${size * 0.4}px` }}>
            {temp}
          </div>
          <div
            className="degrees-text"
            style={{ fontSize: `${size * 0.25}px` }}
          >
            °C
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TempWidget
