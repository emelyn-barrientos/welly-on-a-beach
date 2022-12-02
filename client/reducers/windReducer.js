import { GET_BEACH_WIND } from '../actions'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_BEACH_WIND:
      return { ...state, [payload.id]: payload.windData }
    default:
      return state
  }
}

export default reducer
