
import React from "react";
import { useSelector } from "react-redux";

import { useParams } from 'react-router-dom'

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

  const beach = beaches.find(beach => beach.id === Number(id))

  return (
    <ul>
    
      
      (<li key={beach.id}>
      <div>
      <p>Name: {beach.name}</p>
      <p>Description: {beach.description}</p>
      <img src={`/images/${id}.jpg`}
          alt={`An image.`}
          width={'500'}
          height={'300'}/>
      <p>Wind data: '35kmph'</p>
      </div>
      </li>))
    </ul>
  )
}

export default BeachDetails