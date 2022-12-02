import { GET_BEACH_WIND } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  const id = payload.id
  const windData = payload.windData
  switch (type) {
    case GET_BEACH_WIND:
      return [...state, { [id]: windData }]
    default:
      return state
  }
}

export default reducer
