import React from 'react'

function BeachCard(props) {
  const { id, name, description, latitude, longitude } = props

  return (
    <div>
      <li>
        {name}
        {description}
      </li>
    </div>
  )
}

export default BeachCard
