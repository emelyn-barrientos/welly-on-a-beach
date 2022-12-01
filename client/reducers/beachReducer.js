import { GET_BEACHES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_BEACHES:
      return payload
    default:
      return state
  }
}

export default reducer
