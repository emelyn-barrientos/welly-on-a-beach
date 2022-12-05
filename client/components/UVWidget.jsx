import React from 'react'
import { getUVLevel } from '../utils'

function UVWidget({ uv, size }) {
  const { level, colour, width } = getUVLevel(uv, size)
  console.log(level, colour, width)
  const maxWidth = size * 0.9
  return (
    <div
      className="widget-container"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        className="uv-text"
        style={{ fontSize: `${size * 0.2}px`, color: `${colour}` }}
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
            height: `${size * 0.18}px`,
            borderRadius: `${size * 0.08}px`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default UVWidget
