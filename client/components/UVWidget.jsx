import React from 'react'
import { getUVLevel } from '../utils'

import { Card, Typography } from '@mui/material'

function UVWidget({ uv, size }) {
  const { colour, width } = getUVLevel(uv, size)
  const maxWidth = size * 0.9
  return (
    <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }}>
      <div
        className="widget-container"
        style={{ width: `${size}px`, height: `${size}px`, marginTop: '1px' }}
      >
        <Typography variant="body2" color="initial" align="center">
          UV Level
        </Typography>
        <div
          className="uv-text"
          style={{ fontSize: `${size * 0.3}px`, color: `${colour}` }}
        >
          {uv}
        </div>
        <div
          className="uv-bar-container"
          style={{
            width: `${maxWidth}px`,
            height: `${size * 0.2}px`,
            borderRadius: `${size * 0.1}px`,
          }}
        >
          <div
            className="uv-bar-fill"
            style={{
              width: `${width}px`,
              backgroundColor: `${colour}`,
              height: `${size * 0.16}px`,
              borderRadius: `${size * 0.09}px`,
            }}
          ></div>
        </div>
      </div>
    </Card>
  )
}

export default UVWidget
