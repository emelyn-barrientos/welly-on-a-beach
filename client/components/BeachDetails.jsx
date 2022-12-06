import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import { Typography } from '@mui/material'
import { Container } from '@mui/system'

import HomeButton from './HomeButton'


function BeachDetails() {
  const { id } = useParams()

  const beaches = useSelector((store) => store.beaches)
  //  const beaches =[{
  //   "id": 1,
  //   "name": "Lyall bay",
  //   "description": "Lyall Bay is a bay and suburb on the south side of the Rongotai isthmus in Wellington, New Zealand. The bay is a popular surf beach, featuring a breakwater at the eastern end.",
  //   "latitude": "41.3291",
  //   "longitude": "174.7953"
  // },
  // {
  //   "id": 2,
  //   "name": "Princess bay",
  //   "description": "Princess Bay is one of the southern beaches of Wellington, New Zealand.",
  //   "latitude": "41.3438",
  //   "longitude": "174.7817"
  // }
  //  ]

  const beach = beaches.find((beach) => beach.id === Number(id))
  console.log(beach)

  return (
    
    <div>
      <Container maxWidth="lg">
      <HomeButton />
      
        <Typography
          variant="h3"
          sx={{
            marginBlock: 2,
          }}
        >
          {beach.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBlock: 1,
          }}
        >
          {beach.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBlock: 1,
          }}
        >
          <strong>Wind data: </strong>35 kmph
        </Typography>
        <img src={`/images/${id}.jpg`} alt={beach.name} width={'90%vw'} />
        <a href={beach.location} target="_blank"><img src={`/images/location${id}.jpg`} alt={beach.name} width={'90%vw'} /></a>
        {/* <a href={beach.location} target="_blank">Go to map</a> */}
      </Container>
    </div>
  )
}

export default BeachDetails
