import React from 'react'

import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material'

function BeachCard(props) {
  const { id, name } = props.beach

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} key={id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`/images/${id}.jpg`}
            alt={`${name} on a summer day.`}
          />
          <CardContent sx={{ boxShadow: 1 }}>
            <p>{name}</p>
            <p>Placeholder for wind speed.</p>
            <p>Placeholder for wind direction.</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default BeachCard
