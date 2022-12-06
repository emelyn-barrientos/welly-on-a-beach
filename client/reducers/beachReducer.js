import { GET_BEACHES, GET_BEACH_FEATURES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_BEACHES:
      return payload
    case GET_BEACH_FEATURES:
      return state.map((beach) => {
        if (beach.id == payload.id) {
          beach.features = payload.features
          return beach
        } else {
          return beach
        }
      })
    default:
      return state
  }
}

export default reducer
