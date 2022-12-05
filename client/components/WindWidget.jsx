import React from 'react'
import { getPointsFromAngle } from '../utils'

function WindWidget({ windDirection, windSpeed, size }) {
  const vectorLength = size * 0.38
  const { x1, y1, x2, y2 } = getPointsFromAngle(
    windDirection,
    vectorLength,
    size * 0.5
  )
  return (
    <div
      className="widget-container"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={size + 'px'}
        height={size + 'px'}
      >
        <circle
          cx={(size * 0.5).toString()}
          cy={(size * 0.5).toString()}
          r={(size * 0.3).toString()}
          stroke="black"
          strokeWidth="3"
          fill="none"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#000"
          strokeWidth="1"
          markerEnd="url(#arrowhead)"
          color="black"
        />
        <circle
          cx={(size * 0.5).toString()}
          cy={(size * 0.5).toString()}
          r={(size * 0.15).toString()}
          fill="white"
        />
        <text
          x={(size * 0.39).toString()}
          y={(size * 0.56).toString()}
          fill="black"
          fontSize={size * 0.2 + 'px'}
          fontWeight="bold"
        >
          {windSpeed}
        </text>
      </svg>
    </div>
  )
}

export default WindWidget
