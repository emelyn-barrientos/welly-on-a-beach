import React from 'react'

function BeachCard(props) {
  const { id, name } = props.beach

  return (
    <div>
      <li key={id}>
        <p>{name}</p>
        <p>Placeholder for wind speed.</p>
        <p>Placeholder for wind direction.</p>
        <img
          src={`/images/${id}.jpg`}
          alt={`${name} on a summer day.`}
          width={'500'}
          height={'300'}
        />
      </li>
    </div>
  )
}

export default BeachCard
